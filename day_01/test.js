
var clickBtn = document.getElementById("clickBtn");
console.log(clickBtn);
console.dir(clickBtn);
clickBtn.onclick = function(event){
    console.dir(event);
    document.bgColor = "blue";
}
