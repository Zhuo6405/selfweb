var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mariadb = require('mariadb');

var productApiRouter = require("./src/routes/productAPI.route");
var loginApiRouter = require("./src/routes/loginAPI.route");
var con = require("./src/configs/dbConfig");
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/product", productApiRouter);
app.use("/api/login", loginApiRouter);

/* mariadb連線測試 */
app.get("/sql", (req, res) => {
  const pool = mariadb.createPool({
    port: con.port, // 連接阜號
    host: con.host, // 主機名稱
    user: con.user, // 用戶名稱
    password: con.password, // 資料庫密碼
    database: con.database, // 資料庫名稱,
    connectionLimit: con.connectionLimit,
  });
  pool.getConnection((err, conn) => {
    if (err) {
      console.log("not connected due to error: " + err);
    } else {
      console.log("connected ! connection id is " + conn.threadId);
      res.send("連線成功!");
      conn.end(); //釋放連線池
    }
  });
});

module.exports = app;
