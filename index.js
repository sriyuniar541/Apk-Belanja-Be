/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//untuk mengimpor express,bodyParser,morgan,cors, helmet, xss
const express = require('express')
var bodyParser = require ('body-parser')
const morgan = require ('morgan');
const cors = require('cors');
require('dotenv').config(); //untuk mengimpor env
const mainRouter = require ('./src/routes/index')
const { response } = require('./src/middleware/common');
const helmet = require ('helmet')
const xss = require('xss-clean')
const multer = require('multer')


//mengambil file product,category,transaction dari routes
//const product = require('./src/routes/product')
const categorys = require('./src/routes/categorys')
const transactions = require('./src/routes/transactions')
const users = require('./src/routes/users')
const pool = require('./src/config/db');



//menginisialisasi express dengan perintah 
const app = express()

//menjalankan server pada port
const port = process.env.PORT

//menggunakan body-parser,cors,morgan,helmet, xss
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(xss())

//main router
app.use('/',mainRouter)
app.use('/img',express.static('./upload'))

//memakakai file import dari file produk
//app.use('/product/',product)
app.use('/categorys',categorys)
app.use('/transactions',transactions)


//(post)
// app.post('/product',[multer({dest : './upload'}), function(req,res){
//     res.status(204).end()
// }])
app.post('/product', (req,res) =>{
})

app.post('/caregorys', (req,res) => {
})
app.post('/transactions', (req,res) => {
})


//(put) 
app.put('/product/:id', (req,res) => {
})
app.put('/categorys/:id', (req,res) => {
})
app.put('/transactions/:id', (req,res) => {
})

//delete
app.delete('/product/:id', (req,res) => {
})
app.delete('/categorys/:id', (req,res) => {
})
app.delete('/transactions/:id', (req,res) => {
})


//error handling All
app.all('*', (req,res,next) => {
    response (res,404,false,'404 not found')
    
})


//error handling
// app.use((err,re,res,next) => {
//     res.status(500).json({
//         status : false,
//         name : err.name,
//         message : err.message
//     })
// })



//menjalankan server
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
