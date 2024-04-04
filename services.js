const Pool = require("./connection");

module.exports = {
  login: (data, callback) => {
    Pool.query(
      `select *  from users where email=?`,
      [data.email],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback("", result);
      }
    );
  },
  registration: (data, callback) => {
    Pool.query(
      `insert into users(email,password)values(?,?)`,
      [data.email, data.password],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback("", result);
      }
    );
  },
  
  homepage: (data, callback) => {
    Pool.query(
      `select * from products where id=?`,
      [data.id],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback("",result);
      }
    );
  },
  productlisting:(data,callback)=>{
    Pool.query(`select * from products where id=?`,[data.id],(error,result)=>{
        if(error){
            return callback(error);

        }return callback("",result);
    })
},
product_detailspage:(data,callback)=>{
    Pool.query(`select * from cart_items where product_name=?`,[data.product_name],(error,result)=>{
        if(error){
            return callback(error);

        }return callback("",result);
    })
},
cart_page:(data,callback)=>{
    Pool.query(`update cart_items SET product_name=?,product_type=?,category_id=?,category=?,category_type=?,prize=? where id=?`,[
        data.id,
        data.product_name,
        data.product_type,
        data.category_id,
        data.category,
        data.category_type,
        data.prize
    ],(error,result)=>{
        if(error){
            return callback(error);
        }return callback("",result);
    })
}}