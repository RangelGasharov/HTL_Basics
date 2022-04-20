const FPS = 60;
let bs = 30;
let bx, by;
let xv, yv;
let canvas, context;

canvas = document.getElementById("gameCanvas")
context = canvas.getContext("2d")

setInterval(update, 1000 / FPS);

bx = canvas.width / 2;
by = canvas.height / 2;

//pps --> pixels per seconds
xv = Math.floor(Math.random() * 101 + 100) / FPS;
yv = Math.floor(Math.random() * 101 + 100) / FPS;


if (Math.floor(Math.random() * 2)== 0) {
    xv = -xv;
}

if (Math.floor(Math.random() * 2)== 0) {
    yv = -yv;
}

function update() {
    bx += xv;
    by += yv;
    
    if(bx - bs/2 < 0 && xv < 0){
        xv = -xv;
    }
    
    if(bx + bs/2 > canvas.width && xv > 0){
        xv = -xv;
    }
    
    if(by - bs/2 < 0 && yv < 0){
        yv = -yv;
    }
    
    if(by + bs/2 > canvas.height && yv > 0){
        yv = -yv;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "red";
    context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
}

//https://www.youtube.com/watch?v=DeqE2yn3v6Q