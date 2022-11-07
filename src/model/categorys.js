const Pool =require ('./../config/db')

const selectDataCategory = () => {
    return Pool.query(`SELECT * FROM categorys ORDER BY id DESC LIMIT 10`);
}

const insertDataCategory = (data) => {
    const {id,categorys} = data;
    return Pool.query(`INSERT INTO categorys(id,categorys) VALUES (${id},'${categorys}')`);
}

const updateDataCategory = (id,data) => {
    const {categorys} = data;
    return Pool.query(`UPDATE categorys SET categorys='${categorys}' WHERE id='${id}'`);
}

const deleteDataCategory = id => {
    return Pool.query(`DELETE FROM categorys where id ='${id}'`);
}

module.exports = {selectDataCategory, insertDataCategory, deleteDataCategory, updateDataCategory}