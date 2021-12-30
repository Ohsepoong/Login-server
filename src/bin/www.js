"use strict";

const PORT = 3000;
const app = require("../app")

// 서버실행
app.listen(PORT, (req, res) => {
    console.log("서버 가동중");
});