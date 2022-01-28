"use strict";

const express = require("express");
const server = express();
const PORT = 3000;

// 서버세팅 : 화면분리 
server.set("views", "./src/views");
server.set("view engine", "ejs");

// 미들웨어 등록
const home = require("./src/routes/home");
server.use("/", home);

server.use(express.static(`${__dirname}/src/public`)); // (__dirname + '/src/public')

const bodyParser = require("body-parser");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));// 한글, 공백 등과 같은 문자가 포함문제를 해결

// 라우팅 : 라우팅분리 .routes/home/index에 분리해 두고 접근한다.
//router.get("/", (req, res) => {}); 
//router.get("/login", (req, res) => {});



// 분리독립연동 -> www.js
// 서버실행
// server.listen(PORT, (req, res) => {
//     console.log("서버 가동중");
// });
module.exports = server;

/** 
 *  req 객체
req.server: server 객체로의 접근 - req.server.get('port')와 같은 식으로 사용
req.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체이다.
req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체이다.
req.ip: 요청의 ip 주소를 담는다.
req.params: 라우트 매개변수에 대한 정보가 담긴다.
req.query: 쿼리스트링의 정보가 담긴다.
req.signedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담긴다.
req.get(헤더 이름): 헤더의 값을 가져온다.

* res 객체
res.server: 똑같이 res 객체를 통해 server 객체에 접근한다.
res.cookie(키, 값, 옵션): 쿠키를 응답에 설정하는 메서드이다.
res.clearCookie(키, 값, 옵션): 쿠키를 응답에서 제거하는 메서드이다.
res.end(): 데이터 없이 응답을 보낸다.
res.json(JSON): JSON 형식의 응답을 보낸다.
res.redirect(주소): 리다이렉트할 주소와 함께 응답을 보낸다.
res.render(뷰, 데이터): 템플릿 엔진을 렌더링하여 응답할 때 사용하는 메서드이다.
res.send(데이터): 데이터를 응답으로 보낸다. 문자열, HTML, 버퍼, 객체, 배열등
res.sendFile(경로): 경로에 위치한 파일을 응답한다.
res.set(헤더, 값): 응답의 헤더를 설정한다.
res.status(코드): 응답 시의 HTTP 상태 코드를 지정한다.
 * */ 