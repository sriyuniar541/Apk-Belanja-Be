/* eslint-disable no-undef */
const Pool = require("./../config/db");

//http://localhost:4000/users/register

const create = (data) => {
    const {id,email,password,fullname,role,otp} = data
    console.log(data)
    return new Promise ((resolve,reject)=>
        Pool.query(`INSERT INTO users(id,email,password,fullname,role,verif,otp) VALUES('${id}','${email}','${password}','${fullname}','${role}',0,${otp})`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err.message)
            }
        })
    )
}

const findEmail = (email) => {
    return new Promise((resolve, reject) => 
    Pool.query(`SELECT * FROM users where email='${email}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const verification = (email) => {
    return new Promise((resolve, reject) => 
    Pool.query(`UPDATE users SET verif=1 WHERE email ='${email}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const getUserId = (id) => {
    return new Promise((resolve, reject) => 
    Pool.query(`SELECT * FROM users WHERE id = '${id}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
    }))
}

const updateProfile = (id,data) => {
    console.log(data)
    const {email,fullname,adress,photo,gender,phoneNumber} = data
    return new Promise ((resolve,reject)=>
    // return Pool.query(`UPDATE products SET name='${name}',stock='${stock}',price='${price}',categorys_id='${categorys_id}',photo='${photo}',users_id='${users_id}' WHERE id='${id}'`);

        Pool.query(`UPDATE users SET email='${email}',fullname='${fullname}',adress='${adress}',photo='${photo}',gender='${gender}',phoneNumber='${phoneNumber}' WHERE id = '${id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err.message)
            }
        })
    )
}



module.exports = {create,findEmail,getUserId,updateProfile,verification}