const { response } = require('../middleware/common'); 
const  ModelCheckout = require('../model/checkout'); 
const Pool = require ('../config/db'); 
// const client = require ('../config/redis'); //redis
const { stringify } = require('uuid'); 
const { v4: uuidv4 } =  require('uuid');


const checkoutController = {
    delete : (req,res,next) => {
        ModelCheckout.deleteData(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },
    get: async(req, res, next) => {
        try {
        const page = Number(req.query.page) || 1 //menerima query(gabungan paramams yang memiliki nilai) page
        const limit = Number(req.query.limit) || 10 //menerima query limit
        const offset = (page - 1) * limit 
        const sortby = req.query.sortby || "name" //menerima query sortby
        const sort = req.query.sort || "ASC"
        const search = req.query.search || '';
        const result = await ModelCheckout.selectData({limit,offset,sort,sortby,search})
        response(res, 200, true, result.rows, "get data success")
        } 
        catch(err){
          console.log(err)
          response(res, 404, false, err, "get data fail");
        }},

    getDetail: (req, res, next) => {
        ModelCheckout.selectDataDetail(req.params.id) //menerima params id
        .then((result) => {
        // client.setEx(`product/${req.params.id}`,60*60,JSON.stringify(result.rows)) 
        response(res, 200, true, result.rows, "get data success")
        })  
        },
    
  
     insert : (req,res,next) => { 
        req.body.id = uuidv4()  
        req.body.products_id =  parseInt(req.body.products_id)
        req.body.categorys_id = parseInt(req.body.categorys_id)
        req.body.user_id = req.body.user_id
        req.body.count = req.body.count
        
        console.log(req.body,'data dari fe')
        ModelCheckout.insertData(req.body) 
        .then(result => response(res,200,true,result.rows,'insert  sukses'))
        .catch(err => response(res,401,false,err,'insert data fail'))
    },
    update : (req,res,next) => {
        ModelCheckout.updatePayment(req.params.id,req.body)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err.message,'update data fail'))
    },
    updateStatusPaymentAll : (req,res,next) => {
        ModelCheckout.updateStatusPayment(req.params.id,req.body)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err,'update data fail'))
    },

}

exports.checkoutController = checkoutController

