const Pool =require ('./../config/db')

const selectDataTransaction = (id) => {
    return Pool.query(`SELECT transactions.email,products.name as products_name,
    transactions.amount,products.price,transactions.total,
    payment_status.name as status FROM transactions JOIN products 
    ON transactions.products_id = products.id JOIN payment_status
    ON transactions.status = payment_status.id`);
}

const selectDataTransactionDetail = () => {
    return Pool.query(`SELECT * FROM transactions ORDER BY id DESC LIMIT 10`);
}

const insertDataTransaction = (data) => {
    const {id,email,products_id,amount,total,status} = data;
    return Pool.query(`INSERT INTO transactions(id,email,products_id,amount,total,status) VALUES (${id},'${email}',${products_id},${amount},${total},${status})`);   
}
 
const updateDataTransaction = (id,data) => {
    const {email,products_id,amount,total,status} = data;
    return Pool.query(`UPDATE transactions SET email='${email}',products_id='${products_id}',amount='${amount}',total='${total}',status='${status}' WHERE id='${id}'`);
}

const deleteDataTransaction = id => {
    return Pool.query(`DELETE FROM transactions where id ='${id}'`);
}

module.exports = {selectDataTransaction, selectDataTransactionDetail, insertDataTransaction, deleteDataTransaction, updateDataTransaction}