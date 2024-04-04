const { createPool } = require("mysql2");
const Pool = createPool({
  host: "localhost",
  user: "root",
  password: "qwerty123",
  port: "3306",
  database: "projectall",
});

module.exports = Pool;
