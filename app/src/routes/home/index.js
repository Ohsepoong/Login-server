"use strict";

const express = require("express");
const router = express.Router(); 


// module.exports = { home, login, }이 ctrl.js에서 내보내고 있어 연동가능
const ctrl = require("./ctrl"); 

// user가 주소창에 url을 입력하는 것이 get request하는 것이다. 
// localhost:3000로 요청오면 ctrl.output.home에 접근, home view를 렌더링한다.
router.get("/", ctrl.output.home); 
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);


module.exports = router;