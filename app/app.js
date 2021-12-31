"use strict";

const express = require("express");
const app = express();
const PORT = 3000;


// 서버세팅 : 화면분리 
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))

// 라우팅 : 라우팅분리 .routes/home/index에 분리해 두고 접근한다.
const home = require("./src/routes/home");
app.use("/", home);

// 분리독립연동
// 서버실행
// app.listen(PORT, (req, res) => {
//     console.log("서버 가동중");
// });
module.exports = app;