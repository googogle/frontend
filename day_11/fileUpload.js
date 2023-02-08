const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const formidable = require('formidable');
const fs = require('fs');

//app.set("","value") => setAttribute
//app.get("key"); => getAttribute
//app.get("paht", callbalkFucn) => srever의 doGet
//app.post("paht", callbalkFucn) => srever의 doPost

app.set("port", 3000);

app.set("view engine", "ejs");
app.set("views" , __dirname + "/template");

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.post("/person/input", (req, res)=>{
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
      console.dir(fields);
      var oldpath = files.file.filepath;
      var newpath = 'C:/2023/front/day_11/public/upload/' + files.file.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
      });
  });
});



app.get("/", (req, res) =>{
    res.writeHead(200, {"content-type": "text/html ; charset: utf8"});
    res.write("<h1>TESTPAGE</h1>");
    res.end();
});  

//http와 express의 결합. 같은 포트를 공유하게 됨
const server =http.createServer(app);
server.listen(app.get("port"), ()=> {
    console.log("listening on port " + app.get("port"));
});
