/* eslint-disable no-unused-vars */
const express = require('express')
const routerCheckout = express.Router()
const {checkoutController} = require('../controller/checkout')
const {validasiStock} = require('../helpers/stock') 
const {protect,requireAdmin,roleUser} = require('../middleware/auth') 
const {upload}  = require('../middleware/upload')
const multer =  require('multer')
const uploade = multer()
//const upload  = require('../middleware/upload') 
//const {hitCache,clearCache} = require('../middleware/redis') 

 
routerCheckout.get("/",checkoutController.get);
routerCheckout.get("/:id",checkoutController.getDetail);
routerCheckout.post("/", uploade.array(''),checkoutController.insert)
//routerCheckout.post('/',protect,validasiStock,checkoutController.insert)
// routerCheckout.put('/:id',upload.single('photo'),checkoutController.update)
//routerCheckout.put('/:id',upload.single('photo'),clearCache,checkoutController.update)
routerCheckout.put('/:id',checkoutController.update)
routerCheckout.put('/payment/:id',checkoutController.updateStatusPaymentAll)
routerCheckout.delete('/:id',checkoutController.delete)



module.exports = routerCheckout 