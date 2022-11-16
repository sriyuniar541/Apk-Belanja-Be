const Pool =require ('./../config/db')


//get data biasa tanpa id categorys
// const selectData = () => {
//     return Pool.query(`SELECT * FROM products`); 
// }


//get data
const selectData = ({limit,offset,sort,sortby,search}) => {
    console.log(limit,offset,sort,sortby)
    return Pool.query(
      `SELECT products.id,products.name,products.stock,  products.price, categorys.id as categorys, products.photo FROM products  JOIN categorys ON products.categorys_id = categorys.id WHERE (products.name) ILIKE ('%${search}%') 
      ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
    );
  };
  
  const selectDataDetail = (id) => {
    return Pool.query(
      `SELECT products.id,products.name,products.stock,  products.price, categorys.id as categorys, products.photo FROM products  JOIN categorys ON products.categorys_id = categorys.id WHERE products.id='${id}' `
    );
  };


// get search,sort,pagination
// const selectData = ({limit,offset,sort,sortby,search}) => {
//     console.log(limit,offset,sort,sortby)
//     return Pool.query(
//       `SELECT products.id,products.name,products.stock,products.price, categorys.name as categorys,products.photo FROM  products JOIN categorys ON products.categorys_id = categorys.id WHERE (products.name) ILIKE ('%${search}%') ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `
//     );
//   };

 
// const selectData = ({sortby,sort,limit,page,search,offset}) => {
//     // return Pool.query(`SELECT products.id,products.name,products.stock,products.price,categorys.name as categorys,products.photo FROM products JOIN categorys ON products.categorys_id = categorys.id WHERE (products.name) ILIKE ('%${search}%') ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `);


//     return Pool.query(`SELECT products.id,products.name,products.stock,  products.price, categorys.name as categorys, products.photo FROM products  JOIN category ON products.categorys_id = categorys.id WHERE (products.name) ILIKE ('%${search}%') ORDER BY products.${sortby} ${sort} LIMIT ${limit} OFFSET ${offset} `)
//     // return Pool.query(`SELECT * FROM products`); 
//     //http://localhost:4000/product?sortby=${sortBy}&sort=${sort}&search=${inputData.search}
//  }


// const sortData = (sortby,sort,page,limit) => {
//     return Pool.query(`SELECT * FROM products ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${(page-1)*limit}`); 
//     //http://localhost:4000/product?sortby=price&sort=desc&page=1&limit=10
//     //return Pool.query(`SELECT * FROM products`); 
// }

const insertData = (data) => {
    const {name,stock,price,categorys_id,photo} = data;
    console.log(data)
    return Pool.query(`INSERT INTO products(name,stock,price,categorys_id,photo) 
    VALUES ('${name}',${stock},${price},${categorys_id},'${photo}')`)
}

const updateData = (id,data) => {
    const {name,stock,price,categorys_id,photo} = data;
    return Pool.query(`UPDATE products SET name='${name}',stock='${stock}',price='${price}',categorys_id='${categorys_id}',photo='${photo}' WHERE id='${id}'`);
}

const deleteData = id => {
    return Pool.query(`DELETE FROM products where id ='${id}'`);
}

module.exports = { insertData, deleteData,selectDataDetail, updateData,selectData} 
//module.exports = {selectData,selectDataSearch,selectDataSort, selectDataDetail, insertData, deleteData, updateData} 