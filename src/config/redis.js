/* eslint-disable no-unused-vars */


//redis untuk penyimpanan database sementara, agar akses lebih cepat tanpa harus melalui database untuk data yang sama
const {createClient} = require('redis')
const client = createClient(6379)
client.on('error',(err) => console.log('Redis Client Eror'))
client.connect()

module.exports = client
