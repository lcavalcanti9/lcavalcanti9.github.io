// fetches canvas from HTML
// *const = variable that never changes, will stay the same
const palace = document.getElementById("palace");
// "rendering interface" variable
const ctx = palace.getContext("2d");

// these will make the canvas size according to the window/monitor size
palace.width = window.innerWidth;
palace.height = window.innerHeight;

// prints height and width of window - just to help programmer, no functionality beyond that
console.log(palace.width= window.innerWidth); //1366 - my personal window sizes, serve as guidelines for other numbers and positions
console.log(palace.height=window.innerHeight); //651

// BACKGROUND fetch images from folder and put them into variables - innefficient - CHANGE LATER
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

// FISH options: bob, fefito, paquito, baiacu
var bobwalk = new Image();
bobwalk.src="bobgoeswalk.GIF";
var blushbob = new Image();
blushbob.src="blushblob.PNG";
var facemaskbob = new Image();
facemaskbob.src="facemaskblob.PNG";
var browbob = new Image();
browbob.src="browblob.PNG";
var normalbob = new Image();
normalbob.src="normalblob.PNG";

// initial positions of hypothetical cube/character
let posx = 360;
let posy = 75;

// how many fish fish
var afish = 0;

// chair variables
var chair1 = 0;
var chair2 = 0;
var chair3 = 0;
var chair4 = 0;

// level&XP
var level = 1;
var xp=0;


// this function compiles all of the background images at the same time - easier as one command
function drawBG(){
    ctx.drawImage(backgroundi,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(rugi,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(wchairsi,0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(curtainsi,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(gamechairsi,0, 0,window.innerWidth, window.innerHeight);
}

// draws sprite
function drawCharac(){
    ctx.drawImage(bobwalk, posx, posy, 75, 75);
}

// this function only exists because the request animation frame one won't allow getToChair() to have parameters
function reachChair(){
    getToChair(305,770,chair1);
}

// another loophole function
function leavingChair(){
    leaveChair(50,360,chair1);
}

// bob's makeup
function blobM(){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    console.log("blob");
    drawBG();
    var progress = 0;
    ctx.drawImage(normalbob, 0,0,window.innerWidth, window.innerHeight);
    // detects key presses
    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="1"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(facemaskbob, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="2"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(blushbob, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="3"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(browbob, 0, 0, window.innerWidth, window.innerHeight)
        }
        else{
            palace.width = window.innerWidth;
            palace.height = window.innerHeight;
            leaveChair();
        };
    });
    xp+=50;
    console.log(xp);
}

// spawns the little rectangle (to be a label in the future) and checks for the 1 key press
function makeupButton(){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    drawBG();
    drawCharac();
    ctx.beginPath(); 
    ctx.strokeRect(760, 380, 20, 20);  

    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="1"){
            blobM();
        }
    });
}

// getting to chair 
function getToChair(a, b, c){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    if (posy<a){
        console.log("yes");
        posy+=0.75; 
    }
    else if (posy>=a){
        console.log("no");
        if (posx<=b){
            posx+=0.75;
            bobwalk.src = "bobgoeswalk90.GIF";
        }
        else if (posx>b){
            c=1;
            console.log(c);
            console.log("yes")
            bobwalk.src="bobgoeswalk.GIF";  
            makeupButton(); 
            exit;
        }
    }
    drawBG();
    drawCharac();
    requestAnimationFrame(reachChair);
}

// bye bye
function leaveChair(a,b,c,f){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    if (posx>=b){
        bobwalk.src="bobgoeswalk270.GIF";
        posx-=0.75;
        c=0;
    }
    else if (posx<b){
        bobwalk.src="bobgoeswalk180.GIF";
        posy-=0.75;
    }
    else if (posy>a){
        exit
    }
    drawBG();
    drawCharac();
    requestAnimationFrame(leavingChair);                 
}

// calling
getToChair(300, 750, chair1);
console.log(chair1);
