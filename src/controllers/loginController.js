var logintModel = require("../models/loginModel");

const user_get = (request, response) => {
  logintModel
    .user_get()
    .then((result) => {
      response.send(result); // 回傳獲取成功訊息
    })
    .catch((err) => {
      return response.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.user_get = user_get;
