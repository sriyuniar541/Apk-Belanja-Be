const express = require('express')
const routerCategory = express.Router()
const {CategoryController} = require('./../controller/categorys')

routerCategory.get('/',CategoryController.getProduct)
routerCategory.post('/',CategoryController.insert)
routerCategory.put('/:id',CategoryController.update)
routerCategory.delete('/:id',CategoryController.delete)


module.exports = routerCategory 