
function roll(params) {
 
var r1= Math.floor(Math.random()*6)+1;




//images 1 dice//
document.querySelector("h1").innerHTML="--"+r1+"--";
var r1i = "images/dice"+r1+".png";
document.querySelector(".img1").setAttribute("src",r1i);
}

document.querySelector("button").addEventListener("click",mouseC)
function mouseC() {

  
    document.querySelector(".img1").classList.add("ani");
    setTimeout(fade,1000) 
    function fade() 
        {
        
        document.querySelector(".img1").classList.remove("ani")
        
        }
}
