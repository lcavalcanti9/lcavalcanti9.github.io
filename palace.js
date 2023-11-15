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
var background = new Image();
background.src="palacebg.PNG";
var rug = new Image();
rug.src = "rug.PNG";
var wchairs = new Image();
wchairs.src= "waitingchairs.PNG";
var gamechairs = new Image();
gamechairs.src = "gamechairs.PNG";
var curtains = new Image();
curtains.src= "curtains.PNG";

var fish=0;

const bgimages = [background, rug, wchairs, gamechairs, curtains];

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

var baiacuwalk = new Image();
baiacuwalk.src="baiacugoeswalk.PNG";
var blushbaiacu = new Image();
blushbaiacu.src="blushbaiacu.PNG";
var facemaskbaiacu = new Image();
facemaskbaiacu.src="facemaskbaiacu.PNG";
var browbaiacu = new Image();
browbaiacu.src="browbaiacu.PNG";
var normalbaiacu = new Image();
normalbaiacu.src="normalbaiacu.PNG";

var fefitowalk = new Image();
fefitowalk.src="fefitogoeswalk.PNG";
var blushfefito = new Image();
blushfefito.src="blushfefito.PNG";
var facemaskfefito = new Image();
facemaskfefito.src="facemaskfefito.PNG";
var browfefito = new Image();
browfefito.src="browfefito.PNG";
var normalfefito = new Image();
normalfefito.src="normalfefito.PNG";

var paquitowalk = new Image();
paquitowalk.src="paquitogoeswalk.PNG";
var blushpaquito = new Image();
blushpaquito.src="blushpaquito.PNG";
var facemaskpaquito = new Image();
facemaskpaquito.src="facemaskpaquito.PNG";
var browpaquito = new Image();
browpaquito.src="browpaquito.PNG";
var normalpaquito = new Image();
normalpaquito.src="normalpaquito.PNG";

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

function reset(){
    xp+=25;
    afish-=1;
    posx = 360;
    posy = 75;
    change0();
    console.log(afish);
    spawn();
}

function sleep(ms){
    return new Promise(resolve=> setTimeout(resolve, ms));
}

function checkLevel(){
    if (xp<100){
        level=1;
        ctx.font= "48px oswald";
        ctx.fillText("level:"+level, 100,100);
        ctx.fillText("xp:"+xp, 100,150);
    }
    else if (xp>=100){
        level=2;
        ctx.font= "48px oswald";
        fishes[1]="fefito";
        ctx.fillText("level:"+level, 100, 100);
        ctx.fillText("xp:"+xp, 100, 150);
        wchairs.src="wchairs2.PNG";
        gamechairs.src="gamechairs2.PNG"
    }
    else if (xp>=250){
        level=3;
        ctx.font= "48px oswald";
        fishes[2]="baiacu";
        ctx.fillText("level:"+level, 100, 100);
        ctx.fillText("xp:"+xp, 100, 150);
    }
    else if (xp>=500){
        level=4;
        ctx.font= "48px oswald";
        fishes[3]="blob";
        ctx.fillText("level:"+level, 100, 100);
        ctx.fillText("xp:"+xp, 100, 150);
    }
}

// this function compiles all of the background images at the same time - easier as one command
function drawBG(){
    ctx.drawImage(background,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(rug,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(wchairs,0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(curtains,0, 0,window.innerWidth, window.innerHeight);
    ctx.drawImage(gamechairs,0, 0,window.innerWidth, window.innerHeight);
    checkLevel();
}

// draws sprite
function drawBob(){
    ctx.drawImage(bobwalk, posx, posy, 75, 75);
}

function drawBaiacu(){
    ctx.drawImage(baiacuwalk, posx, posy, 75,75);
}

function drawPaquito(){
    ctx.drawImage(paquitowalk, posx, posy, 75,75);
}

function drawFefito(){
    ctx.drawImage(fefitowalk, posx, posy, 75,75);
}

function change0(){
    if(fish==1){
        bobwalk.src="bobgoeswalk.GIF";
    }
    else if(fish==2){
        baiacuwalk.src="baiacugoeswalk.PNG";
    }
    else if(fish==3){
        paquitowalk.src="paquitogoeswalk.PNG";
    }
    else if(fish==4){
        fefitowalk.src="fefitogoeswalk.PNG";
    }
}

function change90(){
    if(fish==1){
        bobwalk.src="bobgoeswalk90.GIF";
    }
    else if(fish==2){
        baiacuwalk.src="baiacugoeswalk90.PNG";
    }
    else if(fish==3){
        paquitowalk.src="paquitogoeswalk90.PNG";
    }
    else if(fish==4){
        fefitowalk.src="fefitogoeswalk90.PNG";
    }
}

function change180(){
    if(fish==1){
        bobwalk.src="bobgoeswalk180.GIF";
    }
    else if(fish==2){
        baiacuwalk.src="baiacugoeswalk180.PNG";
    }
    else if(fish==3){
        paquitowalk.src="paquitogoeswalk180.PNG";
    }
    else if(fish==4){
        fefitowalk.src="fefitogoeswalk180.PNG";
    }
}

function change270(){
    if(fish==1){
        bobwalk.src="bobgoeswalk270.GIF";
    }
    else if(fish==2){
        baiacuwalk.src="baiacugoeswalk270.PNG";
    }
    else if(fish==3){
        paquitowalk.src="paquitogoeswalk270.PNG";
    }
    else if(fish==4){
        fefitowalk.src="fefitogoeswalk270.PNG";
    }
}

// this function only exists because the request animation frame one won't allow getToChair() to have parameters
function reachChair(){
    if (gtc==1){
        getToChair(300,700,chair1);
    }
    else if(gtc==2){
        getToChair(300,700,chair2);
    }
    else if(gtc==3){
        getToChair(300,700,chair3);
    }
    else if(gtc==4){
        getToChair(300,700,chair4);
    }
}

// another loophole function
function leavingChair(){
    if (gtc==1){
        leaveChair(-50,360,chair1);
    }
    else if(gtc==2){
        leaveChair(-50,360,chair2);
    }
    else if(gtc==3){
        leaveChair(-50,360,chair3);
    }
    else if(gtc==4){
        leaveChair(-50,360,chair4);
    }
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
            if (gtc==1){
                leaveChair(-50,360,chair1);
            }
            else if(gtc==2){
                leaveChair(-50,360,chair2);
            }
            else if(gtc==3){
                leaveChair(-50,360,chair3);
            }
            else if(gtc==4){
                leaveChair(-50,360,chair4);
            }
            return;
        };
    });
}

// baiacu's makeup
function baiacuM(){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    console.log("baiacu");
    drawBG();
    ctx.drawImage(normalbaiacu, 0,0,window.innerWidth, window.innerHeight);
    // detects key presses
    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="1"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(facemaskbaiacu, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="2"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(blushbaiacu, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="3"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(browbaiacu, 0, 0, window.innerWidth, window.innerHeight)
        }
        else{
            palace.width = window.innerWidth;
            palace.height = window.innerHeight;
            if (gtc==1){
                leaveChair(-50,360,chair1);
            }
            else if(gtc==2){
                leaveChair(-50,360,chair2);
            }
            else if(gtc==3){
                leaveChair(-50,360,chair3);
            }
            else if(gtc==4){
                leaveChair(-50,360,chair4);
            }
            return;
        };
    });
}

// baiacu's makeup
function paquitoM(){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    console.log("paquito");
    drawBG();
    var progress = 0;
    ctx.drawImage(normalpaquito, 0,0,window.innerWidth, window.innerHeight);
    // detects key presses
    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="1"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(facemaskpaquito, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="2"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(blushpaquito, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="3"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(browpaquito, 0, 0, window.innerWidth, window.innerHeight)
        }
        else{
            palace.width = window.innerWidth;
            palace.height = window.innerHeight;
            if (gtc==1){
                leaveChair(-50,360,chair1);
            }
            else if(gtc==2){
                leaveChair(-50,360,chair2);
            }
            else if(gtc==3){
                leaveChair(-50,360,chair3);
            }
            else if(gtc==4){
                leaveChair(-50,360,chair4);
            }
            return;
        };
    });
}

function fefitoM(){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    console.log("fefito");
    drawBG();
    var progress = 0;
    ctx.drawImage(normalfefito, 0,0,window.innerWidth, window.innerHeight);
    // detects key presses
    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="1"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(facemaskfefito, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="2"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(blushfefito, 0, 0, window.innerWidth, window.innerHeight);
        }
        else if(e.key=="3"){
            ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
            drawBG();
            ctx.drawImage(browfefito, 0, 0, window.innerWidth, window.innerHeight)
        }
        else{
            palace.width = window.innerWidth;
            palace.height = window.innerHeight;
            if (gtc==1){
                leaveChair(-50,360,chair1);
            }
            else if(gtc==2){
                leaveChair(-50,360,chair2);
            }
            else if(gtc==3){
                leaveChair(-50,360,chair3);
            }
            else if(gtc==4){
                leaveChair(-50,360,chair4);
            }
            return;
        };
    });
}

// spawns the little rectangle (to be a label in the future) and checks for the 1 key press
function makeupButton1(){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    drawBG();
    if(fish==1){
        drawBob();
    }
    else if(fish==2){
        drawBaiacu();
    }
    else if(fish==3){
        drawPaquito();
    }
    else if(fish==4){
        drawFefito();
    }
    ctx.beginPath(); 
    ctx.strokeRect(760, 380, 20, 20);  

    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="1"){
            if(fish==1){
                blobM();
            }
            else if(fish==2){
                baiacuM();
            }
            else if(fish==3){
                paquitoM();
            }
            else if(fish==4){
                fefitoM();
            }
        }
    });
}

function makeupButton2(){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    drawBG();
    if(fish==1){
        drawBob();
    }
    else if(fish==2){
        drawBaiacu();
    }
    else if(fish==3){
        drawPaquito();
    }
    else if(fish==4){
        drawFefito();
    }
    ctx.beginPath(); 
    ctx.strokeRect(760, 380, 20, 20);  

    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="2"){
            if(fish==1){
                blobM();
            }
            else if(fish==2){
                baiacuM();
            }
            else if(fish==3){
                paquitoM();
            }
            else if(fish==4){
                fefitoM();
            }
        }
    });
}

function makeupButton3(){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    drawBG();
    if(fish==1){
        drawBob();
    }
    else if(fish==2){
        drawBaiacu();
    }
    else if(fish==3){
        drawPaquito();
    }
    else if(fish==4){
        drawFefito();
    }
    ctx.beginPath(); 
    ctx.strokeRect(760, 380, 20, 20);  

    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="3"){
            if(fish==1){
                blobM();
            }
            else if(fish==2){
                baiacuM();
            }
            else if(fish==3){
                paquitoM();
            }
            else if(fish==4){
                fefitoM();
            }
        }
    });
}

function makeupButton4(){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    drawBG();
    if(fish==1){
        drawBob();
    }
    else if(fish==2){
        drawBaiacu();
    }
    else if(fish==3){
        drawPaquito();
    }
    else if(fish==4){
        drawFefito();
    }
    ctx.beginPath(); 
    ctx.strokeRect(760, 380, 20, 20);  

    window.addEventListener("keydown", e=>{
        console.log(e.key);
        if (e.key=="4"){
            if(fish==1){
                blobM();
            }
            else if(fish==2){
                baiacuM();
            }
            else if(fish==3){
                paquitoM();
            }
            else if(fish==4){
                fefitoM();
            }
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
            change90();
        }
        else if (posx>b){
            c=1;
            console.log(c);
            console.log("yes")
            change0();  
            makeupButton1(); 
            return;
        }
    }
    drawBG();
    if(fish==1){
        drawBob();
    }
    else if(fish==2){
        drawBaiacu();
    }
    else if(fish==3){
        drawPaquito();
    }
    else if(fish==4){
        drawFefito();
    }
    requestAnimationFrame(reachChair)
    console.log(a);
}

// tchau tchau
function leaveChair(a,b,c){
    palace.width = window.innerWidth;
    palace.height = window.innerHeight;
    ctx.clearRect(0,0,500,500);
    if (posx>=b){
        change270();
        posx-=0.75;
        c=0;
    }
    else if (posx<b){
        change180();
        posy-=0.75;
        if (posy<a){
            reset();
            return;
        }
    }
    drawBG();
    if(fish==1){
        drawBob();
    }
    else if(fish==2){
        drawBaiacu();
    }
    else if(fish==3){
        drawPaquito();
    }
    else if(fish==4){
        drawFefito();
    }
    requestAnimationFrame(leavingChair);                 
}

//blobToChair(700,300, chair1);
//baiacuToChair(750,300, chair2)

var gtc=0;

function spawn(){
    checkLevel();
    if(level>=1&&afish==0&&chair1==0){
        fish=1;
        getToChair(700,300,chair1);
        afish+=1;
        gtc=1;
    }
    else if(level>=2&&afish>=1&&chair2==0){
        fish=2;
        getToChair(700,300,chair2);
        afish+=1;
        gtc=2;
    }
    else if(level>=3&&afish>=2&&chair3==0){
        fish=3;
        getToChair(700,300,chair3);
        afish+=1;
        gtc=3;
    }
    else if(level>=4&&afish>=3&&chair4==0){
        fish=4;
        getToChair(700,300,chair4);
        afish+=1;
        gtc=4;
    }
}

spawn();
