// fetches canvas from HTML
// *const = variable that never changes, will stay the same
const palace = document.getElementById("palace");

// "rendering interface" variable
const ctx = palace.getContext("2d");

// these will make the canvas size according to the window/monitor size
palace.width = 1350;
palace.height = 650;


// BACKGROUND fetch images from folder and put them into variables
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
var buttons=new Image();
buttons.src="button1.PNG";

// FISH option images: bob/burbuja/blob, fefito, paquito, baiacu
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

var mbuttons=new Image();
mbuttons.src="mbuttons.PNG";

// initial positions of hypothetical cube/character
let posx = 360;
let posy = 75;

// chair variables
var chair1 = 0;
var chair2 = 0;
var chair3 = 0;
var chair4 = 0;

// level&XP
var level = 1;
var xp=0;

// fish x and y variables for moving in getToChair() and leaveChair()
var blobx = 360;
var bloby = 75;

var paquitox = 360;
var paquitoy = 75;

var fefitox = 360;
var fefitoy = 75;

var baiacux = 360;
var baiacuy = 75;

function reset(){
    xp+=25;
    if(fish==1){
        bloby=75;
        blobx=360;
    }
    else if(fish==2){
        baiacuy=75;
        baiacux=360;
    }
    else if(fish==3){
        paquitoy=75;
        paquitox=360;
    }
    else if(fish==4){
        fefitoy=75;
        fefitox=360;
    }
    //console.log(afish);
    //console.log("reset");
    change0();
    if (level==1){
        spawngen();
    }
    else if (level==2&&fish==2){
        spawnbob();
    }
    else if (level==2&&fish==1){
        spawngen();
    }
    else if (level==3&&fish==3){
        spawnbaiacu();
    }
    else if (level==3&&fish==2){
        spawnbob();
    }
    else if (level==3&&fish==1){
        spawngen();
    }
    else if (level==4&&fish==4){
        spawnpaquito();
    }
    else if (level==4&&fish==3){
        spawnbaiacu();
    }
    else if (level==4&&fish==2){
        spawnbob();
    }
    else if (level==4&&fish==1){
        spawngen();
    }
    return;
}

function checkLevel(){
    if (xp<50){
        level=1;
        ctx.font= "48px oswald";
        ctx.fillText("level:"+level, 100,100);
        ctx.fillText("XP:"+xp, 100,150);
    }
    else if (xp>=50&&xp<150){
        level=2;
        ctx.font= "48px oswald";
        ctx.fillText("level:"+level, 100, 100);
        ctx.fillText("XP:"+xp, 100, 150);
        wchairs.src="wchairs2.PNG";
        gamechairs.src="gamechairs2.PNG"
        buttons.src="button2.PNG";
    }
    else if (xp>=150&&xp<300){
        level=3;
        ctx.font= "48px oswald";
        ctx.fillText("level:"+level, 100, 100);
        ctx.fillText("XP:"+xp, 100, 150);
        wchairs.src="wchairs3.PNG";
        buttons.src="button3.PNG";
        gamechairs.src="gamechairs3.PNG";
    }
    else if (xp>=200){
        level=4;
        ctx.font= "48px oswald";
        ctx.fillText("level:"+level, 100, 100);
        ctx.fillText("XP:"+xp, 100, 150);
        buttons.src="button4.PNG";
        gamechairs.src="gamechairs4.PNG";
    }
}

// this function compiles all of the background images at the same time - easier as one command
function drawBG(){
    ctx.drawImage(background,0, 0,1350,650);
    ctx.drawImage(rug,0, 0,1350,650);
    ctx.drawImage(wchairs,0, 0, 1350,650);
    ctx.drawImage(curtains,0, 0,1350,650);
    ctx.drawImage(gamechairs,0, 0,1350, 650);
    ctx.drawImage(buttons,0, 0,1350, 650);
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

// rotates fish by changing image src
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
        getToChair(300,690,chair1);
    }
    else if(gtc==2){
        getToChair(300,975,chair2);
    }
    else if(gtc==3){
        getToChair(425,685,chair3);
    }
    else if(gtc==4){
        getToChair(425,975,chair4);
    }
}

// another loophole function - continues leaveChair()
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

// bob's makeup (zoom in+ event listeners for adding makeup)
function blobM(){
    ctx.clearRect(0,0,1350,650);
    drawBG();
    ctx.drawImage(normalbob, 0,0,1350,650);
    ctx.drawImage(mbuttons, -50,0,1350,650);
    // detects key presses
    window.addEventListener("keydown", haha);
        function haha(e){
        if (e.key=="1"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(facemaskbob, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if(e.key=="2"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(blushbob, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if(e.key=="3"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(browbob, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if (e.key=="4"){
            palace.width = 1350,650;
            palace.height = 1350,650;
            if (gtc==1){
                leaveChair(-50,360,chair1);
            }
            else if(gtc==2){
                leaveChair(-50,370,chair2);
            }
            else if(gtc==3){
                leaveChair(-50,380,chair3);
            }
            else if(gtc==4){
                leaveChair(-50,390,chair4);
            }
            window.removeEventListener("keydown", haha);
            return;
        };
    };
}

// baiacu's makeup (zoom in+ event listeners for adding makeup)
function baiacuM(){
    ctx.clearRect(0,0,1350,650);
    //console.log("baiacu");
    drawBG();
    ctx.drawImage(normalbaiacu, 0,0,1350,650);
    ctx.drawImage(mbuttons, -50,0,1350,650);
    // detects key presses
    window.addEventListener("keydown", haha2);
        function haha2(e){
        if (e.key=="1"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(facemaskbaiacu, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if(e.key=="2"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(blushbaiacu, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if(e.key=="3"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(browbaiacu, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if (e.key=="4"){
            palace.width = 1350,650;
            palace.height = 1350,650;
            leaveChair(-50,370,chair2);
            window.removeEventListener("keydown", haha2);
            return;
        };
    };
}

// paquito's makeup (zoom in+ event listeners for adding makeup)
function paquitoM(){
    ctx.clearRect(0,0,1350,650);
    drawBG();
    ctx.drawImage(normalpaquito, 0,0,1350,650);
    ctx.drawImage(mbuttons, -50,0,1350,650);
    // detects key presses
    window.addEventListener("keydown", haha3);
        function haha3(e){
        if (e.key=="1"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(facemaskpaquito, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if(e.key=="2"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(blushpaquito, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if(e.key=="3"){
            ctx.clearRect(0,0,1350,650);
            drawBG();
            ctx.drawImage(browpaquito, 0, 0, 1350,650);
            ctx.drawImage(mbuttons, -50,0,1350,650);
        }
        else if (e.key=="4"){
            leaveChair(-50,380,chair3);
            window.removeEventListener("keydown", haha3);
            return;
        };
    };
}

// fefito's makeup (zoom in+ event listeners for adding makeup)
function fefitoM(){
    ctx.clearRect(0,0,1350,650);
    drawBG();
    ctx.drawImage(normalfefito, 0,0,1350,650);
    ctx.drawImage(mbuttons, -50,0,1350,650);
    // detects key presses
    window.addEventListener("keydown", haha4);
    function haha4(e){
    if (e.key=="1"){
        ctx.clearRect(0,0,1350,650);
        drawBG();
        ctx.drawImage(facemaskfefito, 0, 0, 1350,650);
        ctx.drawImage(mbuttons, -50,0,1350,650);
    }
    else if(e.key=="2"){
        ctx.clearRect(0,0,1350,650);
        drawBG();
        ctx.drawImage(blushfefito, 0, 0, 1350,650);
        ctx.drawImage(mbuttons, -50,0,1350,650);
    }
    else if(e.key=="3"){
        ctx.clearRect(0,0,1350,650);
        drawBG();
        ctx.drawImage(browfefito, 0, 0, 1350,650);
        ctx.drawImage(mbuttons, -50,0,1350,650);
    }
    else if (e.key=="4"){
        leaveChair(-50,390,chair4);
        window.removeEventListener("keydown", haha4);
        return;
    };
};
}

// checks for the "1" key press when the fish gets to the first chair
function makeupButton1(){
    ctx.clearRect(0,0,1350,650);
    drawBG();
    drawBob();
    window.addEventListener("keydown",here)
    function here(e){
        if (e.key=="1"){
                blobM();
                window.removeEventListener("keydown", here);
            }
        else if (e.key!="1"){
            window.removeEventListener("keydown", here);
            makeupButton1();
            return;
        }
    }
}

// checks for the "2" key press when the fish gets to the second chair
function makeupButton2(){
    ctx.clearRect(0,0,1350,650);
    drawBG();
    drawBaiacu();

    window.addEventListener("keydown",here2)
    function here2(e){
        if (e.key=="2"){
                baiacuM();
                window.removeEventListener("keydown", here2);
            }
        else if (e.key!="2"){
            window.removeEventListener("keydown", here2);
            makeupButton2();
            return;
        }
    }
}

// checks for the "3" key press when the fish gets to the third chair
function makeupButton3(){
    ctx.clearRect(0,0,1350,650);
    drawBG();
    drawPaquito();

    window.addEventListener("keydown",here3)
    function here3(e){
        if (e.key=="3"){
                paquitoM();
                window.removeEventListener("keydown", here3);
            }
        else if (e.key!="3"){
            window.removeEventListener("keydown", here3);
            makeupButton3();
            return;
        }
    }
}

// checks for the "4" key press when the fish gets to the fourth chair
function makeupButton4(){
    ctx.clearRect(0,0,1350,650);
    drawBG();
    drawFefito();

    window.addEventListener("keydown",here4)
    function here4(e){
        if (e.key=="4"){
                fefitoM();
                window.removeEventListener("keydown", here4);
            }
        else if (e.key!="4"){
            window.removeEventListener("keydown", here4);
            makeupButton4();
            return;
        }
    }
}

// getting to chair
function getToChair(a, b, c){
    if(fish==1){
        posy=bloby;
        posx=blobx;
    }
    else if(fish==2){
        posy=baiacuy;
        posx=baiacux;
    }
    else if(fish==3){
        posy=paquitoy;
        posx=paquitox;
    }
    else if(fish==4){
        posy=fefitoy;
        posx=fefitox;
    }

    ctx.clearRect(0,0,1350,650);
    if (posy<a){
        if(fish==1){
            bloby+=3;
        }
        else if(fish==2){
            baiacuy+=3;
        }
        else if(fish==3){
            paquitoy+=3;
        }
        else if(fish==4){
            fefitoy+=3;
        } 
    }
    else if (posy>=a){
        if (posx<b){
            if(fish==1){
                blobx+=3;
            }
            else if(fish==2){
                baiacux+=3;
            }
            else if(fish==3){
                paquitox+=3;
            }
            else if(fish==4){
                fefitox+=3;
            }
            change90();
        }
        else if (posx>=b){
            c=1;
            change0();  
            if(fish==1){
                makeupButton1();
            }
            else if(fish==2){
                makeupButton2();
            }
            else if(fish==3){
                makeupButton3();
            }
            else if(fish==4){
                makeupButton4();
            } 
            return c;
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
}

// bye bye (chair->door)
function leaveChair(a,b,c){
    if(fish==1){
        posy=bloby;
        posx=blobx;
    }
    else if(fish==2){
        posy=baiacuy;
        posx=baiacux;
    }
    else if(fish==3){
        posy=paquitoy;
        posx=paquitox;
    }
    else if(fish==4){
        posy=fefitoy;
        posx=fefitox;
    }

    ctx.clearRect(0,0,500,500);
    if (posx>=b){
        change270();
        if(fish==1){
            blobx-=3;
        }
        else if(fish==2){
            baiacux-=3;
        }
        else if(fish==3){
            paquitox-=3;
        }
        else if(fish==4){
            fefitox-=3;
        }
        c=0;
    }
    else if (posx<b){
        change180();
        if(fish==1){
            bloby-=3;
        }
        else if(fish==2){
            baiacuy-=3;
        }
        else if(fish==3){
            paquitoy-=3;
        }
        else if(fish==4){
            fefitoy-=3;
        }
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

// gtc = get to chair
var gtc=0;

function spawnbob(){
    fish=1;
    getToChair(300,700,chair1);
    gtc=1;
}

function spawnbaiacu(){
    fish=2;
    change0();
    getToChair(300,800,chair2);
    gtc=2;
}

function spawnpaquito(){
    fish=3;
    getToChair(700,300,chair3);
    gtc=3;
}

function spawnfefito(){
    fish=4;
    getToChair(700,300,chair4);
    gtc=4;
}

function spawngen(){
    checkLevel();
    if(level==1){
        spawnbob();
    }
    else if(level==2){
        spawnbaiacu();
    }
    else if(level==3 ){
        spawnpaquito();
    }
    else if(level==4){
        spawnfefito();
    }
    else{
        return;
    }
}

spawngen();
