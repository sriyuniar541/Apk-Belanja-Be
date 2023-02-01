const { response } = require('../middleware/common'); 
const  ModelProduct = require('./../model/addproduct'); 
const Pool = require ('./../config/db'); 
// const client = require ('../config/redis'); //redis
const { stringify } = require('uuid'); 
const { v4: uuidv4 } =  require('uuid');


const ProductController = {
    delete : (req,res,next) => {
        ModelProduct.deleteData(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },

    deleteByUser : (req,res,next) => {
        const user_id = req.payload.id
        ModelProduct.deleteDataAll(user_id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },

    getProductAll: async(req, res, next) => {
        try {
        const page = Number(req.query.page) || 1 //menerima query(gabungan paramams yang memiliki nilai) page
        const limit = Number(req.query.limit) || 10 //menerima query limit
        const offset = (page - 1) * limit 
        const sortby = req.query.sortby || "name" //menerima query sortby
        const sort = req.query.sort || "ASC"
        const search = req.query.search || '';
        const result = await ModelProduct.selectDataAll({limit,offset,sort,sortby,search})
        response(res, 200, true, result.rows, "get data success")
        } 
        catch(err){
          console.log(err)
          response(res, 404, false, err, "get data fail");
        }},

    getProduct: async(req, res, next) => {
        try {
        const page = Number(req.query.page) || 1 //menerima query(gabungan paramams yang memiliki nilai) page
        const limit = Number(req.query.limit) || 10 //menerima query limit
        const offset = (page - 1) * limit 
        const sortby = req.query.sortby || "name" //menerima query sortby
        const sort = req.query.sort || "ASC"
        const search = req.query.search || '';
        const user_id = req.payload.id
        const result = await ModelProduct.selectData({limit,offset,sort,sortby,search,user_id})
        response(res, 200, true, result.rows, "get data success")
        } 
        catch(err){
          console.log(err)
          response(res, 404, false, err, "get data fail");
        }},

    getProductOrder: async(req, res, next) => {
            try {
            const page = Number(req.query.page) || 1 //menerima query(gabungan paramams yang memiliki nilai) page
            const limit = Number(req.query.limit) || 10 //menerima query limit
            const offset = (page - 1) * limit 
            const sortby = req.query.sortby || "name" //menerima query sortby
            const sort = req.query.sort || "ASC"
            const search = req.query.search;
            // const user_id = req.payload.id
            const result = await ModelProduct.selectDataOrder({limit,offset,sort,sortby,search})
            response(res, 200, true, result.rows, "get data success")
            } 
            catch(err){
              console.log(err)
              response(res, 404, false, err, "get data fail");
            }},


    getProductDetail: (req, res, next) => {
        ModelProduct.selectDataDetail(req.params.id) //menerima params id
        .then((result) => {
        // client.setEx(`product/${req.params.id}`,60*60,JSON.stringify(result.rows)) 
        response(res, 200, true, result.rows, "get data success")
        })  
        },
    
     insert : (req,res,next) => { 
        req.body.id = uuidv4()  
        req.body.products_id =  parseInt(req.body.products_id)
        req.body.categorys_id = parseInt(req.body.categorys_id)
        req.body.user_id = (req.body.user_id)
        req.body.count = parseInt(req.body.count)
        
        ModelProduct.insertData(req.body) 
        .then(result => response(res,200,true,result.rows,'insert data sukses'))
        .catch(err => response(res,401,false,err.message,'insert data fail'))
       
    },

    updateStatus : (req,res,next) => {
        const user_id = req.payload.id
        ModelProduct.updateKeranjang(user_id)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err,'update data fail'))
    },

    updateStatusDelivery : (req,res,next) => {
        // const user_id = req.payload.id
        ModelProduct.updateDelivery(req.params.id)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err.message,'update data fail'))
    },
}

exports.ProductController = ProductController

