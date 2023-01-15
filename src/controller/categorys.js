/* eslint-disable no-unused-vars */
const { response } = require('../middleware/common');
const  ModelCategory = require('../model/categorys')
const { v4: uuidv4 } =  require('uuid'); 

//untuk control
const CategoryController = {
    //untuk put diambil dari file index.js
    update : (req,res,next) => {
        ModelCategory.updateDataCategory(req.params.id,req.body)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err,'update data fail'))
    },
    //delete diambil dari file index.js
    delete : (req,res,next) => {
        ModelCategory.deleteDataCategory(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },
    //get diambil dari file index.js
    getProduct : (req,res,next) => {
        ModelCategory.selectDataCategory()
        .then(result => response(res,200,true,result.rows,'get data sukses'))
        .catch(err => response(res,401,false,err,'get data fail'))
    },
     //untuk post yang diambil dari file index.js
     insert : (req,res,next) => {
        ModelCategory.insertDataCategory(req.body)
        .then(result => response(res,200,true,result.rows,'insert data sukses'))
        .catch(err => response(res,401,false,err,'insert data fail'))
        console.log(req.body)
    },
}

//untuk mengexport produk contol
exports.CategoryController = CategoryController

