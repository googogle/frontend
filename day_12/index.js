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
        console.log(">>>>>> (1) ");
        res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
    });

    form.on("end", function (){
        console.log("파일 갯수 : ", this.openedFiles.length);
        for(var i=0; i<this.openedFiles.length; i++) {
            let file = this.openedFiles[i];
            console.dir(file);
            var oldpath = file.filepath;
            var newpath = 'C:/2023/front/day_11/public/upload/' + file.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        }
    });
});



app.get("/", (req, res) =>{
    res.writeHead(200, {"content-type": "text/html ; charset: utf8"});
    res.write("<h1>TESTPAGE</h1>");
    res.end();
});  


var carList = [];
for(var i=0; i<10; i++) {
    carList.push({no:i, name:"car name "+i, price: (1+i)*1000, year:2008+i, company:"company"+i});
}

//get방식의 요청 처리 기능
app.get("/car", (req,res)=>{
    console.log("get");
    res.send(carList);
});

//express의 bodyParset 미들웨어 설정 - POST요청 방식에서 파라미터를 받기 위해.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//post방식의 요청 처리 기능
//post 요청에서 파라미터를 받기위해서 body-parser 미들웨어 필요
//테스트는 postman으로
let no = 0;
app.post("/car", (req, res)=>{
    let carObj = req.body;
    no = carList.length;
    console.log("POST - /car");
    console.log(req.body);
    carObj.no = no++;
    carList.push(carObj); 
    res.send(carList);
});

//수정기능
app.post("/car/modify", (req, res)=>{
    console.log("POST - /car/modify")
    var no = req.body.no;
    console.log("Changed Element Index : " ,no);
    carList.splice(no,1,req.body);
    console.log(carList);
    res.send(carList);

});

//삭제기능
app.post("/car/delete", (req, res)=>{
    console.log("POST - /car/delete")
    console.log("data index to delete : " , req.body.no);
    carList.splice((req.body.no),1);
    console.log("carList length : ", carList.length);
    for(var i = 0 ; i < carList.length; i ++) {carList[i].no = i };
    res.send(carList);

});

//http와 express의 결합. 같은 포트를 공유하게 됨
const server =http.createServer(app);
server.listen(app.get("port"), ()=> {
    console.log("listening on port " + app.get("port"));
});
