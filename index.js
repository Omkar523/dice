
function roll(params) {
 
var r1= Math.floor(Math.random()*6)+1;




//images 1 dice//
document.querySelector("h1").innerHTML="--"+r1+"--";
var r1i = "images/dice"+r1+".png";
document.querySelector(".img1").setAttribute("src",r1i);
}