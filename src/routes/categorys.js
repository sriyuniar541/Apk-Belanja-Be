const express = require('express')
const routerCategory = express.Router()
const {CategoryController} = require('./../controller/categorys')
const multer= require('multer')
const uploade = multer()

routerCategory.get('/',CategoryController.getProduct)
routerCategory.post('/',uploade.array(''),CategoryController.insert)
routerCategory.put('/:id',uploade.array(''),CategoryController.update)
routerCategory.delete('/:id',CategoryController.delete)


module.exports = routerCategory 