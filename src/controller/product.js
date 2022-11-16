/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { response } = require('../middleware/common'); //untuk menangkap error 
const  ModelProduct = require('./../model/product'); //menyambungkan ke model/product
const Pool = require ('./../config/db'); //untuk terhubung ke database
// const client = require ('../config/redis'); //redis
const { stringify } = require('uuid'); //untuk membuat id unik


//untuk control
const ProductController = {
    //untuk put diambil dari file index.js
    update : (req,res,next) => {
        const Port = process.env.PORT //env
        const Host = process.env.HOST //env
        const photo = req.file.filename 
        const uri = `http://${Host}:${Port}/img/${photo}`
        req.body.photo = uri
        req.body.stock = parseInt(req.body.stock) //parseInt untuk mengubah string ke integer(bilangan bulat)
        req.body.price = parseInt(req.body.price)
        req.body.categorys_id = parseInt(req.body.categorys_id)
        
        ModelProduct.updateData(req.params.id,req.body)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err,'update data fail'))
    },
    //delete diambil dari file index.js
    delete : (req,res,next) => {
        ModelProduct.deleteData(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },

    // getProduct : (req,res,next) => { 
    //     ModelProduct.selectData()
    //     .then(result => response(res,200,true,result.rows,'get data sukses'))
    //     .catch(err => response(res,401,false,err,'get data fail'))
    // },

    getProduct: async(req, res, next) => {
        try {
        const page = Number(req.query.page) || 1 //menerima query(gabungan paramams yang memiliki nilai) page
        const limit = Number(req.query.limit) || 10 //menerima query limit
        const offset = (page - 1) * limit 
        const sortby = req.query.sortby || "name" //menerima query sortby
        const sort = req.query.sort || "ASC"
        const search = req.query.search || '';
        const result = await ModelProduct.selectData({limit,offset,sort,sortby,search})
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
        const Port = process.env.PORT //env
        const Host = process.env.HOST //env
        const photo = req.file.filename //multer
        const uri = `http://${Host}:${Port}/img/${photo}`
        req.body.photo = uri
        req.body.stock = parseInt(req.body.stock)
        req.body.price = parseInt(req.body.price)
        req.body.categorys_id = parseInt(req.body.categorys_id)
        
        ModelProduct.insertData(req.body) 
        .then(result => response(res,200,true,result.rows,'insert data sukses'))
        .catch(err => response(res,401,false,err,'insert data fail'))
    },
}

//untuk mengexport produk contol
exports.ProductController = ProductController

