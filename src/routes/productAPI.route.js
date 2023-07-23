var express = require("express");
var router = express.Router();
var productCtrl = require("../controllers/productController");

/* GET Function */
router.get("/", productCtrl.product_get);
// router.post('/addList',articleCtrl.articlePost); //引用 article.controller 裡的 Function
// router.get('/getList',articleCtrl.articleGet); //select
// router.post('/updateList',articleCtrl.articlePut); //put(update)
// router.post('/changeStatus',articleCtrl.articleChange);
// router.delete('/removeList',articleCtrl.articleRemove);//delete
module.exports = router;
