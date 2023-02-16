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

//사용자 정의 미들웨어 -필터 역할
app.use((req, res, next) => {
  console.log("사용자 정의 미들웨어 1");
  console.log(req.query.name);

  //미들웨어 실행 후 다음기능 호출 필요.
  next();
  //요청 처리 완료 후 실행되는 부분
  console.log("response 미들웨어 2");
});
app.use((req, res, next) => {
  console.log("사용자 정의 미들웨어 2");
  console.log(req.url);

  //미들웨어 실행 후 다음기능 호출 필요.
  next();
  //요청 처리 완료 후 실행되는 부분
  console.log("response 미들웨어 2");
});

app.get("/home", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>TEST PAGE</h1>");
  res.end(); // end()호출안하면 무한루프 발생.
});

const todoList = [
  { no: 1, title: "AAA", done: false },
  { no: 2, title: "BBB", done: false },
  { no: 3, title: "CCC", done: false },
];

//ejs 템플릿 뷰 엔진 사용
app.get("/todoList", (req, res) => {
  //req.app.render(뷰 파일, data, callbacl func(err,data){});
  req.app.render("todoList", { todoList }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});

app.post("/todoList", (req, res) => {
  //post방식에서 파라미터 받기위해 bodyParser 미들웨어를 사용해야함.
  //express.json(). express.urlencoded() 미들웨어로 설정
  var newTask = req.body.newTask;
  console.log(req.body.newTask);
  //저장 후 목록갱신
  res.redirect("/todoList");
});

// http와 express를 합쳐준다. (같은 port 사용)
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("server listening on 3000");
});
