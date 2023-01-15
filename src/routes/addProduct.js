/* eslint-disable no-unused-vars */
const express = require('express')
const routerAdd = express.Router()
const {ProductController} = require('./../controller/addProduct')
const {validasiStock} = require('../helpers/stock') 
const {protect,requireAdmin,roleUser} = require('../middleware/auth') 
const {upload}  = require('../middleware/upload') 
const multer =  require('multer')
const uploade = multer()
 

routerAdd.get("/All",ProductController.getProductAll); 
routerAdd.get("/order",ProductController.getProductOrder); 
routerAdd.get("/",protect,ProductController.getProduct);
routerAdd.get("/:id",ProductController.getProductDetail);
routerAdd.post("/",protect,uploade.array(''),ProductController.insert)
routerAdd.delete('/:id',protect,ProductController.delete)
routerAdd.delete('/',protect,ProductController.deleteByUser)
routerAdd.put('/updateStatus',protect,ProductController.updateStatus)
routerAdd.put('/updateDelevery/:id',protect,ProductController.updateStatusDelivery)



module.exports = routerAdd 