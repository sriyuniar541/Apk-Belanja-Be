/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { response } = require('../middleware/common'); //untuk menghubungkan ke eror handling yang telah dibuat
const  {create,findEmail} = require('../model/users') //untuk menguhungkan fungsion create dan findEmail
const bcrypt = require('bcryptjs'); 
const { v4: uuidv4 } =  require('uuid'); //membuat id unik
const {generateToken} = require ('../helpers/auth') //membuat token
const {email} = require ('../middleware/email')

const UsersController = { 
    insert:async (req,res,next) => {
        let {rows:[users]} = await findEmail(req.body.email)
        console.log('role',req.params.role)
        if(users){
            return response(res,404,false,'email alredy user','register fail') 
        }
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync(req.body.password)
        let data = {
            id : uuidv4(),
            email : req.body.email,
            password,
            fullname : req.body.fullname,
            role :req.body.role
            //http://localhost:4000/users/register/toko
            
        }
        try{
            const result = await create(data)
            if (result){
                console.log(result)
                response(res,200,true,true,'register succes') 
            }
        } catch (err){
            console.log(err)
            response(res,404,false,err,'register fail')
        }
    },
    
    login: async(req,res,next) => {
        console.log('email:',req.body.email)
        console.log('password:',req.body.password)
        let {rows:[users]} = await findEmail(req.body.email)
        if(!users){
            return response(res,404,false,null,'email not found')
        }
        const password = req.body.password
        const validation = bcrypt.compareSync(password,users.password)

        if(!validation){
            return response(res,404,false,'wrong password')
        }
        delete users.password
        let payload = {
            id : users.id,
            email:users.email,
            role:users.role
        }
        users.token = generateToken(payload)
        response(res,200,true,users,'login succes')
        //http://localhost:4000/users/login
    },
    email : async (req,res,next) => {
        try{
            const sendEmail = await email(req.params.email,'sriyuniar86@gmail.com','kode OTP','https://localhost:3000/product')
            response(res,200,true,sendEmail,'send email succes')
        } catch (err) {
            response(res,404,false,'send email fail ')
        }
    }
}

exports.UsersController = UsersController 