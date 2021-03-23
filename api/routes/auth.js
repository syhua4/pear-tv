import "../db";
var express = require("express");
var router = express.Router();
import {
  postJoin,
  postLogin,
  postEditUser,
} from "../controllers/userController";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("auth");
});
router.post("/register", postJoin);
router.post("/login", postLogin);
router.post("/editUser", postEditUser);

module.exports = router;
