/* eslint-disable no-unused-vars */
const express = require('express')
const routerAdd = express.Router()
const {ProductController} = require('./../controller/addProduct')
const {validasiStock} = require('../helpers/stock') 
const {protect,requireAdmin,roleUser} = require('../middleware/auth') 
const {upload}  = require('../middleware/upload') 
//const upload  = require('../middleware/upload') 
//const {hitCache,clearCache} = require('../middleware/redis') 

 
routerAdd.get("/",ProductController.getProduct);
routerAdd.get("/:id",ProductController.getProductDetail);
routerAdd.post("/",upload.single('photo'), ProductController.insert)
//routerAdd.post('/',protect,validasiStock,ProductController.insert)
// routerAdd.put('/:id',upload.single('photo'),ProductController.update)
//routerAdd.put('/:id',upload.single('photo'),clearCache,ProductController.update)
//routerAdd.put('/:id',protect,clearCache,ProductController.update)
routerAdd.delete('/:id',ProductController.delete)



module.exports = routerAdd 