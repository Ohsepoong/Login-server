"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;


// 서버세팅 : 화면분리 
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// url을 통해 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결
app.use(bodyParser.urlencoded({ extended: true }));

// 라우팅 : 라우팅분리 .routes/home/index에 분리해 두고 접근한다.
const home = require("./src/routes/home");
app.use("/", home);

// 분리독립연동
// 서버실행
// app.listen(PORT, (req, res) => {
//     console.log("서버 가동중");
// });
module.exports = app;