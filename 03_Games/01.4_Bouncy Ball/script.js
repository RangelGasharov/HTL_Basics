const FPS = 60;
let bs1 = 30;
let bs2 = 20;
let bx1, by1, bx2, by2;
let xv1, yv1, xv2, yv2;
let canvas, context;
let wallHits = 0;

canvas = document.getElementById("gameCanvas")
context = canvas.getContext("2d")

setInterval(update, 1000 / FPS);

bx1 = canvas.width / 2;
by1 = canvas.height / 2;

bx2 = canvas.width / 2;
by2 = canvas.height / 2;

//pps --> pixels per seconds
xv1 = Math.floor(Math.random() * 151 + 100) / FPS;
yv1 = Math.floor(Math.random() * 151 + 100) / FPS;

xv2 = Math.floor(Math.random() * 251 + 150) / FPS;
yv2 = Math.floor(Math.random() * 251 + 150) / FPS;


if (Math.floor(Math.random() * 2)== 0) {
    xv1 = -xv1;
}
if (Math.floor(Math.random() * 2)== 0) {
    xv2 = -xv2;
}

if (Math.floor(Math.random() * 2)== 0) {
    yv1 = -yv1;
}
if (Math.floor(Math.random() * 2)== 0) {
    yv2 = -yv2;
}

function update() {
    bx1 += xv1;
    by1 += yv1;

    bx2 += xv2;
    by2 += yv2;
    
    if(bx1 - bs1/2 < 0 && xv1 < 0){
        xv1 = -xv1;
        wallHits += 1;
    }
    if(bx2 - bs2/2 < 0 && xv2 < 0){
        xv2 = -xv2;
        wallHits += 1;
    }
    
    if(bx1 + bs1/2 > canvas.width && xv1 > 0){
        xv1 = -xv1;
        wallHits += 1;
    }
    if(bx2 + bs2/2 > canvas.width && xv2 > 0){
        xv2 = -xv2;
        wallHits += 1;
    }
    
    if(by1 - bs1/2 < 0 && yv1 < 0){
        yv1 = -yv1;
        wallHits += 1;
    }
    if(by2 - bs2/2 < 0 && yv2 < 0){
        yv2 = -yv2;
        wallHits += 1;
    }
    
    if(by1 + bs1/2 > canvas.height && yv1 > 0){
        yv1 = -yv1;
        wallHits += 1;
    }
    if(by2 + bs2/2 > canvas.height && yv2 > 0){
        yv2 = -yv2;
        wallHits += 1;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "red";
    context.fillRect(bx1 - bs1 / 2, by1 - bs1 / 2, bs1, bs1);
    context.fillStyle = "yellow";
    context.fillRect(bx2 - bs2/2, by2 - bs2/2, bs2, bs2);

    document.getElementById("totalWallHits").innerHTML = "Total amount of wall hits: " +  wallHits;
}


//https://www.youtube.com/watch?v=DeqE2yn3v6Q