const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "text/html; charset=utf8"});
    if(req.url === "/profile") {
        res.write("<h2>프로필 페이지</h2>");
        res.write("<a href='/'>홈으로 이동</a>");
    }
    if(req.url === "/") {
        res.write("<h2>홈페이지</h2>");
        res.write("<a href='/profile'>프로필로 이동</a>");
    }
    res.end();

});
server.listen(3000,()=>{
    console.log("node.js 서버 실행중");
})
