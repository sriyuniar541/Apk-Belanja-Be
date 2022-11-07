/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { response } = require('../middleware/common');
const  ModelProduct = require('./../model/product')
const Pool = require ('./../config/db');
const client = require ('../config/redis'); //redis
const { stringify } = require('uuid');


//untuk control
const ProductController = {
    //untuk put diambil dari file index.js
    update : (req,res,next) => {
        const Port = process.env.PORT //env
        const Host = process.env.HOST //env
        const photo = req.file.filename
        const uri = `http://${Host}:${Port}/img/${photo}`
        req.body.photo = uri
        req.body.stock = parseInt(req.body.stock)
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

    getProduct : (req,res,next) => { 
        ModelProduct.selectData()
        .then(result => response(res,200,true,result.rows,'get data sukses'))
        .catch(err => response(res,401,false,err,'get data fail'))
    },

    getProductSearch : (req,res,next) => { 
        //http://localhost:4000/product?search=nas
        const search = req.query.search || '';
        ModelProduct.selectDataSearch(search)
        .then(result => response(res,200,true,result.rows,'get data sukses'))
        .catch(err => response(res,401,false,err,'get data fail'))
    },

    getProductSort : (req,res,next) => { 
        //http://localhost:4000/product?sortby=price&sort=desc&page=1&limit=10
        const sortby = req.query.sortby || 'id';
        let sort = req.query.sort || 'asc'; 
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        ModelProduct.selectDataSort(sortby,sort,page,limit)
        .then(result => response(res,200,true,result.rows,'get data sukses'))
        .catch(err => response(res,401,false,err,'get data fail'))
    },

    getProductDetail : (req,res,next) => { 
        ModelProduct.selectDataDetail(req.params.id)
        .then((result) => 
            client.setEx(`product/${req.params.id}`,60*60,JSON,stringify(result.rows))
            (response(res,200,true,result.rows,'get data sukses')))
        .catch(err => response(res,401,false,err,'get data fail'))
    },
     
     insert : (req,res,next) => {   
        const Port = process.env.PORT //env
        const Host = process.env.HOST //env
        const photo = req.file.filename
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

