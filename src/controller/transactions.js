/* eslint-disable no-unused-vars */
const { response } = require('../middleware/common');
const  ModelTransaction = require('../model/transactions')

//untuk control
const TransactionController = {
    //untuk put diambil dari file index.js
    update : (req,res,next) => {
        ModelTransaction.updateDataTransaction(req.params.id,req.body)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err,'update data fail'))
    },
    //delete diambil dari file index.js
    delete : (req,res,next) => {
        ModelTransaction.deleteDataTransaction(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },
    //get diambil dari file index.js
    getProduct : (req,res,next) => {
        ModelTransaction.selectDataTransaction()
        .then(result => response(res,200,true,result.rows,'get data sukses'))
        .catch(err => response(res,401,false,err,'get data fail'))
    },

    //get diambil dari file index.js
    getProductDetail : (req,res,next) => {
        ModelTransaction.selectDataTransaction(req.params.id)
        .then(result => response(res,200,true,result.rows,'get data sukses'))
        .catch(err => response(res,401,false,err,'get data fail'))
    },

     //untuk post yang diambil dari file index.js
     insert : (req,res,next) => {
        ModelTransaction.insertDataTransaction(req.body)
        .then(result => response(res,200,true,result.rows,'insert data sukses'))
        .catch(err => response(res,401,false,err,'insert data fail'))
    },
}

//untuk mengexport produk contol
exports.TransactionController = TransactionController

