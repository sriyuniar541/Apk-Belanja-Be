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

 
routerCheckout.get("/All",checkoutController.getAll);
routerCheckout.get("/",protect,checkoutController.get);
routerCheckout.get("/:id",checkoutController.getDetail);
routerCheckout.post("/",protect,uploade.array(''),checkoutController.insert)
//routerCheckout.post('/',protect,validasiStock,checkoutController.insert)
// routerCheckout.put('/:id',upload.single('photo'),checkoutController.update)
//routerCheckout.put('/:id',upload.single('photo'),clearCache,checkoutController.update)
routerCheckout.put('/:user_id',protect,checkoutController.update)
routerCheckout.put('/payment/:user_id',protect,checkoutController.updateStatusPaymentAll)
routerCheckout.delete('/:id',protect,checkoutController.delete)



module.exports = routerCheckout 