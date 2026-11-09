// DB 연결 설정
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "todo0825",
  password: "todo0825",
  database: "todo_db0825",
  connectionLimit: 5,
});

module.exports = pool;
