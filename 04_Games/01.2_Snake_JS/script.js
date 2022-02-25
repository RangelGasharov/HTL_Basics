let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let rows = 20;
let cols = 30;
let snake = [{ x: 29, y: 0 }];
let food = { x: 4, y: 5 };
canvas.widht = 720;
canvas.height = 480;
let cellWidht = canvas.widht / cols;
let cellHeight = canvas.height / rows;
let direction = 'LEFT';

setInterval(gameLoop, 500);

draw();

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.widht, canvas.height)
    ctx.fillStyle = 'red';

    snake.forEach(part => add(part.x, part.y));

    ctx.fillStyle = 'yellow';
    add(food.x, food.y);

    requestAnimationFrame(draw);
}

function add(x, y) {
    ctx.fillRect(x * cellHeight, y * cellHeight, cellWidht - 1, cellHeight - 1)
}

function gameLoop() {
    snake[0].x--;
}

function keyDown(e)