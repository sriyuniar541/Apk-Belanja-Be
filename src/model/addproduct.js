const Pool = require('./../config/db')


const selectDataDetail = (id) => {
  return Pool.query(
    `SELECT myBag.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,categorys.id as categorys_id,users.id as user_id,users.fullname as user_name,myBag.count,myBag.status FROM mybag
    INNER JOIN products ON myBag.products_id = products.id
    INNER JOIN categorys ON myBag.categorys_id = categorys.id
    INNER JOIN users ON myBag.user_id = users.id WHERE myBag.id='${id}'`
  );
};

const selectData = ({ limit, offset, sort, sortby, search,user_id }) => {
  console.log(limit, offset, sort, sortby,user_id)
  return Pool.query(
    ` SELECT myBag.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,categorys.id as categorys_id,users.id as user_id,users.fullname as user_name,products.users_id as users_toko,myBag.count,myBag.status,myBag.statusorder FROM mybag
      INNER JOIN products ON myBag.products_id = products.id
      INNER JOIN categorys ON myBag.categorys_id = categorys.id
      INNER JOIN users ON myBag.user_id = users.id where user_id ='${user_id}';`
  );
};

const selectDataOrder = ({ limit, offset, sort, sortby, search }) => {
  console.log(limit, offset, sort, sortby)
  return Pool.query(
    ` SELECT myBag.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,categorys.categorys as categorys,categorys.id as categorys_id,users.id as user_id,users.fullname as user_name,products.users_id as users_toko,myBag.count,myBag.statusorder,myBag.status FROM mybag
      INNER JOIN products ON myBag.products_id = products.id
      INNER JOIN categorys ON myBag.categorys_id = categorys.id
      INNER JOIN users ON myBag.user_id = users.id WHERE (products.users_id ) ILIKE ('%${search}%');`
  );
};

const selectDataAll = ({ limit, offset, sort, sortby, search }) => {
  console.log(limit, offset, sort, sortby)
  return Pool.query(
    ` SELECT myBag.id,products.id as products_id,products.name as products_name,products.photo as products_photo,products.price as products_price,products.stock as products_stock,products.users_id as users_toko,categorys.categorys as categorys,categorys.id as categorys_id,users.id as user_id,users.fullname as user_name,myBag.count,myBag.status FROM mybag
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

const updateKeranjang = user_id => {
  return Pool.query(`UPDATE myBag SET status=1 where user_id ='${user_id}'`);
}

const updateDelivery = ( id) => {
  return Pool.query(`UPDATE myBag SET statusOrder='Delivery' where id='${id}'`);
}

module.exports = { insertData, deleteData, selectDataDetail, selectData,selectDataAll,deleteDataAll,updateKeranjang ,updateDelivery,selectDataOrder}
//module.exports = {selectData,selectDataSearch,selectDataSort, selectDataDetail, insertData, deleteData, updateData} 