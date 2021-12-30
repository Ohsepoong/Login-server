"use strict";

const express = require("express");
const router = express.Router(); 


// module.exports = { home, login, }이 ctrl.js에서 내보내고 있어 연동가능
const ctrl = require("./ctrl"); 

router.get("/", ctrl.home); // ctrl파일의 변수 home에 접근, home은 view를 뿌리고 있다.
router.get("/login", ctrl.login);


module.exports = router;