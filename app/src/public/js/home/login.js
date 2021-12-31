"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    // front에서 USER가 요청으로 입력한 정보를  저장 -> DOM을 이용하여 HTML객체를 저장
    const req = {
        id : id.value,
        pw : pw.value
    };
    //console.log(req);
    //console.log(JSON.stringify(req)); // 입력데이타의 문자열변환 코드
    //console.log(req, JSON.stringify(req)); 
    // {id: 'beryoza', pw: '1234'} '{"id":"beryoza","pw":"1234"}'

    // 이 정보데이타를 서버로 전달하는 코드
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
}