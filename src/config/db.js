
const { Pool } = require(`pg`);
require(`dotenv`).config();

const connectionString = process.env.PG_CONNECT;

const pool = new Pool({ connectionString });

pool.connect((err) => {
  if (err) {
    console.log('<:: PostgreSQL Client Error', err);
  } else {
    console.log(`::> PostgreSQL Client Connected sri03`);
  }
});

module.exports = pool;




// const { Pool} = require ('pg')
// const pool = new Pool ({
//         user : process.env.DB_USER,
//         host : process.env.DB_HOST,
//         database :process.env.DB_DATABASE,
//         password :process.env.DB_PASS,
//         port : process.env.DB_PORT
// })

// module.exports = pool




//untuk menghubungkan ke databese postgres kemudian disimpan di env

// const { Pool} = require ('pg')
// const pool = new Pool ({
//         user : process.env.DB_USER,
//         host : process.env.DB_HOST,
//         database :process.env.DB_DATABASE,
//         password :process.env.DB_PASS,
//         port : process.env.DB_PORT, 
// })

// module.exports = pool
