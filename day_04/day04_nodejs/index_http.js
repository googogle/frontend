const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("<h1>Hi</h2>");
});

server.listen(3000,function(){
    console.log("서버 실행중");
});