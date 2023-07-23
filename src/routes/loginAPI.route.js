var express = require("express");
var router = express.Router();
var loginCtrl = require("../controllers/loginController");

/* GET Function */
router.get("/", loginCtrl.user_get);

module.exports = router;
