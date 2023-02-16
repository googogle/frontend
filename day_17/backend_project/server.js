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

const todoList = [
  { no: 1, title: "AAA", done: false },
  { no: 2, title: "BBB", done: false },
  { no: 3, title: "CCC", done: false }
];

let todoListLen = 4;

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
  console.log(req.body.newTask);
  todoList.push({ no: todoListLen++, title: req.body.newTask, done: false });
  //저장 후 목록갱신
  res.redirect("/todoList");
});

app.get("/json/todoList", (req, res) => {
  //res.end - 문자열만 처리
  //res.send() - 수식 또는 객체만 처리, json문자열로 return
  res.send({ todoList: todoList });
});

app.get("/todoList/update", (req, res) => {
  console.log("GET - /todoList/update");
  let idx = req.query.idx;
  let title = req.query.title;

  todoList[idx-1].title = title;
  res.redirect("/todoList");
});

app.get("/todoList/checkupdate", (req, res) => {
  console.log("GET - /todoList/update");
  let idx = req.query.idx;
  todoList[idx-1].done = !todoList[idx-1].done;

  res.redirect("/todoList");
});

app.get("/todoList/delete", (req, res) => {
  console.log("GET - /todoList/delete");
  let idx = req.query.idx;

  todoList.splice(idx,1);
  for(var i = 0 ; i < todoList.length ; i ++) todoList[i].no = i + 1;
  
  todoListLen = todoList.length +1;

  res.redirect("/todoList");
});

// http와 express를 합쳐준다. (같은 port 사용)
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("server listening on 3000");
});
