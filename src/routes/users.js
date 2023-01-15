const express = require('express')
const router = express.Router()
const {UsersController}= require('./../controller/users')
const {role} = require('../middleware/auth')
const {upload}  = require('../middleware/upload') 


router.post('/register/:role',role,UsersController.insert)
router.post('/login',UsersController.login)
router.post('/email/otp',UsersController.otp)
// router.get('/:email',UsersController.email)
router.get('/get/:id',UsersController.getUser) 
router.put('/:id',upload.single('photo'),UsersController.UpdateUser) 



module.exports = router