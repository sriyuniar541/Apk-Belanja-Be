const { response } = require('../middleware/common'); 
const  ModelProduct = require('./../model/product'); 
const Pool = require ('./../config/db'); 
// const client = require ('../config/redis'); //redis
const { stringify } = require('uuid'); 
const cloudinary = require('../config/cloudinary');



const ProductController = {
    updateProduct : async (req,res,next) => {
        try{
            req.body.stock = parseInt(req.body.stock) 
            req.body.price = parseInt(req.body.price)
            req.body.categorys_id = parseInt(req.body.categorys_id)
            req.body.users_id = req.payload.id

            if (req.file) {
                const image = await cloudinary.uploader.upload(req.file.path, {
                  folder: 'belanja',
                });
        
                req.body.photo = image.url;
              } else {
                req.body.photo = users.photo;
              }

            const result = await ModelProduct.updateData(req.params.id,req.body)
            console.log(req.body)
            response(res,200,true,result.rows,'update product success')
        } catch (err) {
            response(res,404,err.message,'update product fail ')
        }
    },
    
    update : (req,res,next) => {
        ModelProduct.active(req.params.id)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err,'update data fail'))
    },

    updateNot : (req,res,next) => {
        ModelProduct.notActive(req.params.id)
        .then(result => response(res,200,true,result.rows,'update data sukses'))
        .catch(err => response(res,401,false,err,'update data fail'))
    },
    
    delete : (req,res,next) => {
        ModelProduct.deleteData(req.params.id)
        .then(result => response(res,200,true,result.rows,'delete data sukses'))
        .catch(err => response(res,401,false,err,'delete data fail'))
    },

    getProduct: async(req, res, next) => {
        try {
        const page = Number(req.query.page) || 1 //menerima query(gabungan paramams yang memiliki nilai) page
        const limit = Number(req.query.limit) || 20 //menerima query limit
        const offset = (page - 1) * limit 
        const sortby = req.query.sortby || "name" //menerima query sortby
        const sort = req.query.sort || "ASC"
        const search = req.query.search || '';
        const result = await ModelProduct.selectData({limit,offset,sort,sortby,search,page })
        response(res, 200, true, result.rows, "get data success")
        } 
        catch(err){
          console.log(err)
          response(res, 404, false, err, "get data fail");
        }},

    getProductUser: async(req, res, next) => {
            try {
            const page = Number(req.query.page) || 1 
            const limit = Number(req.query.limit) || 10 
            const offset = (page - 1) * limit 
            const sortby = req.query.sortby || "name"
            const sort = req.query.sort || "ASC"
            const search = req.query.search || '';
            const users_id = req.payload.id
            const result = await ModelProduct.selectDataUser({limit,offset,sort,sortby,search,users_id})
            response(res, 200, true, result.rows, "get data success")
            } 
            catch(err){
              console.log(err)
              response(res, 404, false, err.message, "get data fail");
            }},

    getProductDetail: (req, res, next) => {
        ModelProduct.selectDataDetail(req.params.id) //menerima params id
        .then((result) => {
        // client.setEx(`product/${req.params.id}`,60*60,JSON.stringify(result.rows)) 
        response(res, 200, true, result.rows, "get data success")
        })  
        },
    

    insert : async (req,res,next) => {
      try{
          req.body.stock = parseInt(req.body.stock) 
          req.body.price = parseInt(req.body.price)
          req.body.categorys_id = parseInt(req.body.categorys_id)
          req.body.users_id = req.payload.id

          if (req.file) {
              const image = await cloudinary.uploader.upload(req.file.path, {
                folder: 'belanja',
              });
      
              req.body.photo = image.url;
            } else {
              req.body.photo = users.photo;
            }

          const result = await ModelProduct.insertData(req.body)
          console.log(req.body)
          response(res,200,true,result.rows,'insert product success')
      } catch (err) {
          response(res,404,err.message,'insert product fail ')
      }
  },
}


exports.ProductController = ProductController

