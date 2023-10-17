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

var chair1 = 0;
var chair2 = 0;
var chair3 = 0;
var chair4 = 0;

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

function getToChair(a, b, c){
    ctx.clearRect(0,0,500,500);
    if (posy<300){
        console.log("yes");
        posy+=0.5; 
    }
    else if (posy>=300){
        console.log("no");
        if (posx<=1000){
            posx+=0.5;
        }
        else if (posx > 1000){
            c=1;
        }
    }
    drawBG();
    drawCharac();
    requestAnimationFrame(getToChair);
}

getToChair(60, 30, chair1);
console.log(chair1);
    drawBG();
    drawCharac();
    requestAnimationFrame(getToChair);
}

getToChair(60, 30, chair1);
console.log(chair1);
