const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const multer = require("multer");
const fs = require("fs");

app.set("views", __dirname + "/views"); 
app.set("view engine", "ejs");
process.env.PORT = 3000;
app.set("port", process.env.PORT || 3001);

app.use(cookieParser());
app.use(expressSession({
  secret: 'my key',
  resave: true,
  saveUninitialized: true
}));
app.use(cors());

//bodyParser
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"));
app.use("/uploads",express.static(__dirname + "/uploads"));

//post 전송방식을 사용하기 때문에 bodyparser가 먼저 선언되어야 함.
let storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "uploads");
  },
  filename: function(req, file, callback) {
    callback(null, Date.now()+"_"+file.originalname);
  }
});

//업로드파일 최대 10개, 1Gb이하로 제한 설정
let upload  = multer(  {
  storage : storage,
  limit : {
    files : 10,
    fileSize : 1024^3
  }
})

/////// router -------
router.route("/home").get((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
  res.write("<h1>calculator</h1>");
  res.end(); 
});

router.route("/process/photo").post(upload.array("photo",1),(req,res) =>{
  console.log("photo POST called");
  console.log(req.files);

  res.end("file uploaded");
});

// Node.js 계산기
// REST 방식으로 처리 - Ajax로 처리 한다.
// post man으로 테스트 하기
router.route("/calc/:x/:y").get((req, res)=>{
  console.log("GET - /calc/:x/:y ... 더하기");
  res.end(String(Number(req.params.x) + Number(req.params.y)));
});
router.route("/calc/:x/:y").post((req, res)=>{
  console.log("POST - /calc/:x/:y ... 빼기");
  res.end(String(Number(req.params.x) - Number(req.params.y)));
});
router.route("/calc/:x/:y").put((req, res)=>{
  console.log("PUT - /calc/:x/:y ... 곱하기");
  res.end(String(Number(req.params.x) * Number(req.params.y)));
});
router.route("/calc/:x/:y").delete((req, res)=>{
  console.log("DELETE - /calc/:x/:y ... 나누기");
  res.end(String(Number(req.params.x) / Number(req.params.y)));
});

app.use("/", router);

/////// error handler -----
var expressErrorHandler = require('express-error-handler');
var errorHandler = expressErrorHandler({
    static : {
        '404':'./public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404) );
app.use(errorHandler );


const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Node.js 서버 실행 중 ... http://localhost:" + app.get("port"));
});