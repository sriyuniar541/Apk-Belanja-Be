/* eslint-disable no-unused-vars */
const express = require('express')
const router = express.Router()
const {ProductController} = require('./../controller/product')
const {validasiStock} = require('../helpers/stock') 
const {protect,requireAdmin,roleUser} = require('../middleware/auth') 
const upload  = require('../middleware/upload') 
//const upload  = require('../middleware/upload') 
//const {hitCache,clearCache} = require('../middleware/redis') 

 
router.get("/",ProductController.getProduct);
router.get("/user",protect,ProductController.getProductUser);
router.get("/:id",ProductController.getProductDetail);
//router.get('/',ProductController.getProduct)
//router.get('/',ProductController.getProductSearch)
//router.get('/:sort',ProductController.getProductSort)
//router.get('/:id',protect,ProductController.getProductDetail)
//router.get('/:id',protect,hitCache,ProductController.getProductDetail)
router.post("/",protect,upload.single('photo'), ProductController.insert)
//router.post('/',protect,validasiStock,ProductController.insert)
router.put('/:id',protect,upload.single('photo'),ProductController.updateProduct)
router.put('/active/:id',protect,ProductController.update)
router.put('/notActive/:id',protect,ProductController.updateNot)
//router.put('/:id',upload.single('photo'),clearCache,ProductController.update)
//router.put('/:id',protect,clearCache,ProductController.update)
router.delete('/:id',ProductController.delete)



module.exports = router 