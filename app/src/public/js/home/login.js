"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    // 요청하여 받은 값을 저장하는 코드 -> DOM을 이용하여 HTML객체를 저장
    const req = {
        id : id.value,
        pw : pw.value
    };
    console.log(req);
    // 이 정보데이타를 값을 서버로 전달하는 코드
}