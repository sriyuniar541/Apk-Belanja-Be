const Pool = require('../config/db')


const selectDataDetail = (id) => {
  return Pool.query(
    `SELECT checkout.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,users.id as user_id,users.fullname as user_name,checkout.status,checkout.statuspayment,checkout.count FROM checkout
    INNER JOIN products ON checkout.products_id = products.id
    INNER JOIN categorys ON checkout.categorys_id = categorys.id
    INNER JOIN users ON checkout.user_id = users.id WHERE checkout.id='${id}'`
  );
};

// get search,sort,pagination
const selectData = ({ limit, offset, sort, sortby, search }) => {
  console.log(limit, offset, sort, sortby)
  return Pool.query(
    `SELECT checkout.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,users.id as user_id,users.fullname as user_name,checkout.status,checkout.statuspayment,checkout.count FROM checkout
    INNER JOIN products ON checkout.products_id = products.id
    INNER JOIN categorys ON checkout.categorys_id = categorys.id
    INNER JOIN users ON checkout.user_id = users.id;`
  );
};

const insertData = (data) => {
  const {id,products_id,categorys_id,user_id,count } = data;
  return Pool.query(`INSERT INTO checkout(id,products_id,categorys_id,user_id,status,statuspayment,count) VALUES ('${id}',${products_id},${categorys_id},'${user_id}',0,0,${count})`)
}

const updatePayment = (id) => {
  return Pool.query(`UPDATE checkout SET status=1 where id ='${id}'`);
}

const updateStatusPayment = (id) => {
  return Pool.query(`UPDATE checkout SET statuspayment=1 where id ='${id}'`);
}

const deleteData = id => {
  return Pool.query(`DELETE FROM checkout where id ='${id}'`);
}

module.exports = { insertData, deleteData, selectDataDetail, selectData, updatePayment,updateStatusPayment}
//module.exports = {selectData,selectDataSearch,selectDataSort, selectDataDetail, insertData, deleteData, updateData} 