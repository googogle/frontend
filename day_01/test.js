
var clickBtn = document.getElementById("clickBtn");
console.log(clickBtn);
console.dir(clickBtn);
clickBtn.onclick = function(event){
    console.dir(event);
    document.bgColor = "blue";
}


//Internal , External
// id 값은 중복 불가능

// == : 값만 비교  === : 타입까지 비교