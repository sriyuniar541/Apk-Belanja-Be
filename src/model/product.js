const Pool =require ('./../config/db')

const selectData = () => {
    return Pool.query(`SELECT products.name,products.stock,products.price,categorys.categorys 
    as categorys FROM products INNER JOIN categorys
    ON products.categorys_id = categorys.id`); 
}

//get search,sort,pagination
const selectDataSearch = (search) => {
    return Pool.query(`SELECT * FROM products WHERE name LIKE '%${search}%'`);
    //return Pool.query(`SELECT * FROM products`); 
    //http://localhost:4000/product?search=pan
}

const selectDataSort = (sortby,sort,page,limit) => {
    return Pool.query(`SELECT * FROM products ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${(page-1)*limit}`); 
    //http://localhost:4000/product?sortby=price&sort=desc&page=1&limit=10
    //return Pool.query(`SELECT * FROM products`); 
}

const selectDataDetail = (id) => {
    return Pool.query(`SELECT products.name,products.stock,products.price,categorys.categorys 
    as categorys FROM products INNER JOIN categorys
    ON products.categorys_id = categorys.id WHERE products.id='${id}'`);   
}
 
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

module.exports = {selectData,selectDataSearch,selectDataSort, selectDataDetail, insertData, deleteData, updateData} 