/* eslint-disable no-unused-vars */
const express = require('express')
const router = express.Router()
const UsersRouter = require('../routes/users')
const ProductRouter = require('../routes/product')


router
.use('/users',UsersRouter)
.use('/product',ProductRouter)


module.exports = router

//const product = require('./src/routes/product')
//app.use('/product/',product)