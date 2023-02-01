const Pool =require ('./../config/db')


 
  const selectDataDetail = (id) => {
    return Pool.query(
      `SELECT products.id,products.name,products.stock,products.price,products.categorys_id as categorys_id,products.photo FROM products INNER JOIN categorys ON products.categorys_id = categorys.id WHERE products.id='${id}' `
    );
  };

// get search,sort,pagination
const selectData = ({limit,offset,sort,sortby,search}) => {
    console.log(limit,offset,sort,sortby)
    return Pool.query(
      `SELECT products.id,products.name,products.stock,products.price, categorys.categorys as categorys,products.photo,products.active FROM  products JOIN categorys ON products.categorys_id = categorys.id WHERE (products.name) ILIKE ('%${search}%') ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
    );
  };

  const selectDataUser = ({limit,offset,sort,sortby,search,users_id}) => {
    console.log(limit,offset,sort,sortby)
    return Pool.query(
      `SELECT products.id,products.name,products.stock,products.price, categorys.categorys as categorys,products.photo,users.id as users_id FROM  products 
      INNER JOIN categorys ON products.categorys_id = categorys.id
      INNER JOIN users ON products.users_id = users.id WHERE users_id ='${users_id}' AND (products.name) ILIKE ('%${search}%') ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`
    );
  };


const insertData = (data) => {
  console.log(data)
  const {name,stock,price,categorys_id,photo,users_id} = data;
  return new Promise ((resolve,reject)=>
      Pool.query(`INSERT INTO products(name,stock,price,categorys_id,photo,users_id) VALUES ('${name}',${stock},${price},${categorys_id},'${photo}','${users_id}')`,(err,result)=>{
          if(!err){
              resolve(result)
          } else {
              reject(err.message)
          }
      })
  )
}

const updateData = (id,data) => {
  console.log(data)
  const {name,stock,price,categorys_id,photo,users_id} = data;
  return new Promise ((resolve,reject)=>
      Pool.query(`UPDATE products SET name='${name}',stock='${stock}',price='${price}',categorys_id='${categorys_id}',photo='${photo}',users_id='${users_id}' WHERE id='${id}'`,(err,result)=>{
          if(!err){
              resolve(result)
          } else {
              reject(err.message)
          }
      })
  )
}

const deleteData = id => {
    return Pool.query(`DELETE FROM products where id ='${id}'`);
}

const active = id => {
  return Pool.query(`UPDATE products SET active=1 where id ='${id}'`);
}

const notActive = id => {
  return Pool.query(`UPDATE products SET active=0 where id ='${id}'`);
}

module.exports = { insertData, deleteData,selectDataDetail, updateData,selectData,selectDataUser,active,notActive} 
//module.exports = {selectData,selectDataSearch,selectDataSort, selectDataDetail, insertData, deleteData, updateData} 