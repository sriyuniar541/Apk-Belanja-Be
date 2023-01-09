const Pool = require('./../config/db')


//get data biasa tanpa id categorys
// const selectData = () => {
//     return Pool.query(`SELECT * FROM addproducts`); 
// }


//get data
// const selectData = ({limit,offset,sort,sortby,search}) => {
//     console.log(limit,offset,sort,sortby)
//     return Pool.query(
//       `SELECT addproducts.id,addproducts.name,addproducts.stock,  products.price, categorys.id as categorys, products.photo FROM products  JOIN categorys ON products.categorys_id = categorys.id WHERE (products.name) ILIKE ('%${search}%') 
//       ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
//     );
//   };

const selectDataDetail = (id) => {
  return Pool.query(
    `SELECT myBag.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,categorys.id as categorys_id,users.id as user_id,users.fullname as user_name,myBag.count FROM mybag
    INNER JOIN products ON myBag.products_id = products.id
    INNER JOIN categorys ON myBag.categorys_id = categorys.id
    INNER JOIN users ON myBag.user_id = users.id WHERE myBag.id='${id}'`
  );
};


// get search,sort,pagination
const selectData = ({ limit, offset, sort, sortby, search,user_id }) => {
  console.log(limit, offset, sort, sortby,user_id)
  return Pool.query(
    // `SELECT addproducts.id,addproducts.name,addproducts.stock,addproducts.price, categorys.categorys as categorys,addproducts.photo FROM  addproducts JOIN categorys ON addproducts.categorys_id = categorys.id WHERE (addproducts.name) ILIKE ('%${search}%') ORDER BY addproducts.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
    // `SELECT addProducts.id,addProducts.name,addProducts.stock,addProducts.price,categorys.categorys as categorys,addProducts.photo,users.fullname as user_name,users.id as user_id
    // FROM addProducts 
    // INNER JOIN categorys ON addProducts.categorys_id = categorys.id
    // INNER JOIN users ON addProducts.user_id = users.id;`
    ` SELECT myBag.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,categorys.id as categorys_id,users.id as user_id,users.fullname as user_name,myBag.count FROM mybag
      INNER JOIN products ON myBag.products_id = products.id
      INNER JOIN categorys ON myBag.categorys_id = categorys.id
      INNER JOIN users ON myBag.user_id = users.id where user_id ='${user_id}';`
  );
};

const selectDataAll = ({ limit, offset, sort, sortby, search }) => {
  console.log(limit, offset, sort, sortby)
  return Pool.query(
    // `SELECT addproducts.id,addproducts.name,addproducts.stock,addproducts.price, categorys.categorys as categorys,addproducts.photo FROM  addproducts JOIN categorys ON addproducts.categorys_id = categorys.id WHERE (addproducts.name) ILIKE ('%${search}%') ORDER BY addproducts.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
    // `SELECT addProducts.id,addProducts.name,addProducts.stock,addProducts.price,categorys.categorys as categorys,addProducts.photo,users.fullname as user_name,users.id as user_id
    // FROM addProducts 
    // INNER JOIN categorys ON addProducts.categorys_id = categorys.id
    // INNER JOIN users ON addProducts.user_id = users.id;`
    ` SELECT myBag.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,categorys.id as categorys_id,users.id as user_id,users.fullname as user_name,myBag.count FROM mybag
      INNER JOIN products ON myBag.products_id = products.id
      INNER JOIN categorys ON myBag.categorys_id = categorys.id
      INNER JOIN users ON myBag.user_id = users.id ;`
  );
};

const insertData = (data) => {
  const {id,products_id,categorys_id,user_id,count } = data;
  console.log(data)
  return Pool.query(`INSERT INTO myBag(id,products_id,categorys_id,user_id,count) VALUES ('${id}',${products_id},${categorys_id},'${user_id}',${count})`)
}
const deleteData = id => {
  return Pool.query(`DELETE FROM myBag where id ='${id}'`);
}
const deleteDataAll = user_id => {
  return Pool.query(`DELETE FROM myBag where user_id ='${user_id}'`);
}

module.exports = { insertData, deleteData, selectDataDetail, selectData,selectDataAll,deleteDataAll }
//module.exports = {selectData,selectDataSearch,selectDataSort, selectDataDetail, insertData, deleteData, updateData} 