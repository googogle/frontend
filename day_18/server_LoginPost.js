const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", 3000);
app.set("views", __dirname + "/views"); // prefix
app.set("view engine", "ejs"); // suffix

//bodyParser미들웨어 설정 - express의 설정으로 변경, POST요청방식에서 바디의 파라미터 사용가능
app.use(express.json()); // application/json
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//static middleware 설정. - express에 내장되어 있음.
//static middleware를 사용하여 public 안의 페이지에 바로 접근 가능하도록 설정
app.use("/", express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>TEST PAGE</h1>");
  res.end(); // end()호출안하면 무한루프 발생.
});

app.post("/html/login", (req, res) => {
  //바디파서 미들웨어 설정 필수
  let id = req.body.id;
  let password = req.body.password;

  res.redirect("/");
});

// http와 express를 합쳐준다. (같은 port 사용)
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("server listening on 3000");
});
