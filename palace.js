//fetches canvas from HTML
//*const = variable that never changes, will stay the same
const palace = document.getElementById("palace");
// "rendering interface" variable
const ctx = palace.getContext("2d");

//these will make the canvas size according to the window/monitor size
palace.width = window.innerWidth;
palace.height = window.innerHeight;

//prints height and width of window - just to help programmer, no functionality beyond that
console.log(palace.width= window.innerWidth); //1366 - my personal window sizes, serve as guidelines for other numbers and positions
console.log(palace.height=window.innerHeight); //651

//fetch images from folder and put them into variables
var backgroundi = new Image();
backgroundi.src="palacebg.PNG";
var rugi = new Image();
rugi.src = "rug.PNG";
var wchairsi = new Image();
wchairsi.src= "waitingchairs.PNG";
var gamechairsi = new Image();
gamechairsi.src = "gamechairs.PNG";
var curtainsi = new Image();
curtainsi.src= "curtains.PNG";

// initial positions of hypothetical cube/character
let posx = 360;
let posy = 75;

//chair variables
var chair1 = 0;
var chair2 = 0;
var chair3 = 0;
var chair4 = 0;

//this function compiles all of the background images at the same time - easier as one command
function drawBG(){
    ctx.drawImage(backgroundi,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(rugi,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(wchairsi,0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(curtainsi,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(gamechairsi,0, 0,window.innerWidth, window.innerHeight);
}

function drawCharac(){
    ctx.beginPath();
    ctx.rect(posx, posy, 20, 20);
    ctx.stroke();
    ctx.closePath();
}

function reachChair(){
    getToChair(300,750,chair1);
}

function getToChair(a, b, chair){
    console.log("a=", a);
    ctx.clearRect(0,0,500,500);
    if (posy<a){
        console.log("yes");
        posy+=0.5; 
    }
    else if (posy>=a){
        console.log("no");
        if (posx<=b){
            posx+=0.5;
        }
        else if (posx>b){
            chair=1;
            console.log(chair);
        }
    }
    drawBG();
    drawCharac();
    requestAnimationFrame(reachChair);
}

getToChair(300, 750, chair1);
console.log(chair1);
