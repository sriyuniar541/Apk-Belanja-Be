/* eslint-disable no-unused-vars */
const express = require('express')
const routerTransaction = express.Router()
const {TransactionController} = require('./../controller/transactions')

routerTransaction.get('/',TransactionController.getProduct)
routerTransaction.get('/:id',TransactionController.getProductDetail)
routerTransaction.post('/',TransactionController.insert)
routerTransaction.put('/:id',TransactionController.update)
routerTransaction.delete('/:id',TransactionController.delete)


module.exports = routerTransaction