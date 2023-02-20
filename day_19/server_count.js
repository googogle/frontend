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

//web conter 예제
let cnt = 0;
router.route("/count").get((req, res)=>{
    console.log("GET - /count");
    cnt++;  // cnt += 1
    let date = new Date();
    let responseData = {
      cnt : cnt,
      dateStr : date.getFullYear()+"-"
      +(date.getMonth()+1)+"-"+(date.getDate())+" "+(date.getHours())+":"
      +(date.getMinutes()) + ":" + (date.getSeconds()),
      date : date
    }

    //res.end(cnt + ""); // res.end(); <-- 문자열만 사용.
    //res.send({cnt});
    res.end(JSON.stringify(responseData));
});

/////// router -------
router.route("/home").get((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
  res.write("<h1>calculator</h1>");
  res.end(); 
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