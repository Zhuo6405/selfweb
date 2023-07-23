var productModel = require("../models/productModel");

const product_get = (request, response) => {
  productModel
    .product_get()
    .then((result) => {
      response.send(result); // 回傳獲取成功訊息
    })
    .catch((err) => {
      return response.send(err);
    }); // 失敗回傳錯誤訊息
};

const user_get = (request, response) => {
  productModel
    .product_get()
    .then((result) => {
      response.send(result); // 回傳獲取成功訊息
    })
    .catch((err) => {
      return response.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.product_get = product_get;
module.exports.user_get = user_get;
