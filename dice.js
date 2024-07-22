var rNum = Math.floor(Math.random()*6)+1;
var dImg = "images/dice"+rNum+".png";
var cdImg = document.querySelectorAll("img")[0];
cdImg.setAttribute("src",dImg);
var rNum1 = Math.floor(Math.random()*6)+1;
var dImg1 = "images/dice"+rNum1+".png";
var cdImg1 = document.querySelectorAll("img")[1];
cdImg1.setAttribute("src",dImg1);


if(rNum>rNum1){
    document.querySelector("h1").style.fontSize="100px";
    document.querySelector("h1").innerHTML="Player 1 is Winner";
}else if(rNum1>rNum){
    document.querySelector("h1").style.fontSize="100px";
    document.querySelector("h1").innerHTML="Player 2 is Winner";
}else{
    document.querySelector("h1").style.fontSize="100px";
    document.querySelector("h1").innerHTML="Match is Drawn";
}