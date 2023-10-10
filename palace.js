const palace = document.getElementById("palace");
const ctx = palace.getContext("2d");

let posx = 50;
let posy = 20;

function drawCharac(){
    ctx.beginPath();
    ctx.rect(posx, posy, 10, 10);
    ctx.stroke();
    ctx.closePath();
}

function getToChair(){
    ctx.clearRect(0,0,500,500);
    posy+=0.5;
    posx+=0.5;
    drawCharac();
    requestAnimationFrame(getToChair);
}

getToChair();
