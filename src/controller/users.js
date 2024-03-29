const { response } = require('../middleware/common'); 
const  {create,findEmail,getUserId,updateProfile,verification} = require('../model/users') 
const bcrypt = require('bcryptjs'); 
const { v4: uuidv4 } =  require('uuid'); 
const {generateToken,generateRefreshToken} = require ('../helpers/auth') 
const email = require ('../middleware/email')
const cloudinary = require('../config/cloudinary');
const Port = process.env.PORT 
const Host = process.env.HOST

const UsersController = { 
    insert:async (req,res,next) => {
        let {rows:[users]} = await findEmail(req.body.email)
        console.log('role',req.params.role)
        if(users){
            return response(res,404,false,'email alredy user','register fail') 
        }
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync(req.body.password)

         //create otp
         let digits = '0123456789'; 
         let otp = '';
         for (let i = 0; i < 6; i++) {
             otp += digits[Math.floor(Math.random() * 10)]
         }

        let data = {
            id : uuidv4(),
            email : req.body.email,
            password,
            fullname : req.body.fullname,
            role :req.body.role,
            otp
            //http://localhost:4000/users/register/toko
            
        }
        try {
            const result = await create(data)
            if (result) {
                console.log(result)
                
                const sendEmail = email(data.email, otp, `http://${Host}:${Port}/${email}/${otp}`,data.fullname)
                if (sendEmail == 'email not send!') {
                    return response(res, 404, false, null, 'register fail')
                }
                response(res, 200, true, { otp: data.otp }, 'register success please check your email to verif')
            }
        } catch (err) {
            console.log(err)
            response(res, 404, false, err.message, 'register fail')
        }
    },
    
    login: async(req,res,next) => {
        console.log('email:',req.body.email)
        console.log('password:',req.body.password)
        let {rows:[users]} = await findEmail(req.body.email)
        if(!users){
            return response(res,404,false,null,'email not found')
        }
        if(users.verif == 0){
            return response(res, 404, false, null," email not verified")
        }
        const password = req.body.password
        const validation = bcrypt.compareSync(password,users.password)

        if(!validation){
            return response(res,404,false,'wrong password')
        }
        delete users.password
        delete users.otp
        delete users.verif
        let payload = {
            id : users.id,
            email:users.email,
            role:users.role
        }

        let accessToken = generateToken(payload);
        let refToken = generateRefreshToken(payload);

        users.token = accessToken
        response(res,200,true,users,'login succes')
        users.refreshToken = refToken;
        //http://localhost:4000/users/login
    },

    otp: async (req, res, next) => {
        let { rows: [users] } = await findEmail(req.body.email)
        if (!users) {
            return response(res, 404, false,null, 'email not found')
        }
        if (users.otp == req.body.otp) {
            const result = await verification(req.body.email)
            return response(res, 200, true, result, 'email succes')
        }
        return response(res, 404, false,null, 'wrong otp please check your email')
    } ,

    getUser : async (req,res,next) => {
        try{
            let id = req.params.id
            const result = await getUserId(id)
            response(res,200,true,result.rows,'get user success')
        } catch (err) {
            response(res,404,err.message,'get user fail ')
        }
    },

    UpdateUser : async (req,res,next) => {
        try{
        
            const {email,fullname,gender,phonenumber,adress} = req.body
            const data = {
                email,
                fullname,
                adress,
                gender,
                phonenumber
            }

            if (req.file) {
                const image = await cloudinary.uploader.upload(req.file.path, {
                  folder: 'telegram',
                });
        
                data.photo = image.url;
              } else {
                data.photo = users.photo;
              }

            const result = await updateProfile(req.params.id,data)
            console.log(data)
            response(res,200,true,result.rows,'update user success')
        } catch (err) {
            response(res,404,err.message,'update user fail ')
        }
    },
}

exports.UsersController = UsersController 