const { response } = require('./common');
const jwt = require('jsonwebtoken')
let key = process.env.JWT_KEY

const roleAdmin = (req,res,next) => {
    console.log(role)
    if(req.params.role == 'admin') {
        return next()
    }
    return response(res,404,false,null,'acces denied')
}

const roleToko = (req,res,next) => {
    console.log(role)
    if(req.params.role == 'toko') {
        return next()
    }
    return response(res,404,false,null,'acces denied')
}

const protectAdmin = (req,res,next) => {
    try{
        let token
        if(req.headers.authorization) {
            let auth = req.headers.authorization
            token = auth.split(' ')[1]
            let decode = jwt.verify(token,key)
            req.payload = decode
            next()
        } else {
            return response(res,404,false,null,'acces denied')
        }
    } catch(err) {
        console.log(err)
        if(err && err.name == 'JsonWebTokenError'){
            return response(res, 404, false, null,"invalid token")
        } else if (err && err.name == 'TokenExpriredError'){
            return response(res, 404, false, null,"expired token")
        } else {
            return response(res, 404, false, null,"token not active")
        }
    }
}

module.exports = {roleAdmin,roleToko,protectAdmin}
