const cvs = document.getElementById('tetris');
/*cvs.widht = 200;
cvs.height = 400;*/
const ctx = cvs.getContext('2d');
const ROW = 20;
const COLUMN = 10;
const VACANT = "white" //Vacant Square Color
const SQ = SQUARESIZE = 20


let board = [];
for (r = 0; r < ROW; r++) {
    board[r] = [];
    for (c = 0; c < COLUMN; c++) {
        board[r][c] = VACANT;
    }
}

function drawBoard() {
    for (r = 0; r < ROW; r++) {
        for (c = 0; c < COLUMN; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}
drawBoard()

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

//drawSquare(5, 6, "green")
//drawSquare(3, 2, "red")

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ]
]

/*let piece = Z[0];
const pieceColor = "orange"

for (r = 0; r < piece.length; r++) {
    for (c = 0; c < piece.length; c++) {
        if (piece[r][c]) {
            drawSquare(c, r, pieceColor)
        }
    }
}*/

function Piece(tetromino, color) {
    this.tetromino = tetromino;
    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.color = color;
    this.x = 3;
    this.y = -2;
    for (r = 0; r < this.activeTetromino.length; r++) {
        for (c = 0; c < this.activeTetromino.length; c++) {
            if (this.activeTetromino[r][c]) {
                drawSquare(c + 3, r + 2, this.color)
            }
        }
    }
}

let piece = new Piece(Z, "blue")

Piece.prototype.draw = function() {
    for (r = 0; r < this.activeTetromino.length; r++) {
        for (c = 0; c < this.activeTetromino.length; c++) {
            if (this - this.activeTetromino[r][c]) {
                drawSquare(this.x + c, this.y + r, this.color)
            }
        }
    }
}

Piece.prototype.unDraw = function() {
    for (r = 0; r < this.activeTetromino.length; r++) {
        for (c = 0; c < this.activeTetromino.length; c++) {
            if (this - this.activeTetromino[r][c]) {
                drawSquare(this.x + c, this.y + r, VACANT)
            }
        }
    }
}

document.addEventListener("keydown", CONTROL);

function CONTROL(event) {
    if (event.keyCode == 37) {
        piece.moveLeft();
    } else if (event.keyCode == 38) {
        piece.rotate();
    } else if (event.keyCode == 39) {
        piece.moveRight();
    } else if (event.keyCode == 40) {
        piece.moveDown();
    }
}

Piece.prototype.moveDown = function() {
    if (!this.collision(0, 1, this.activeTetromino)) {
        this.unDraw();
        this.y++;
        this.draw();
    } else {

    }
}

Piece.prototype.moveLeft = function() {
    if (!this.collision(-1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x--;
        this.draw();
    } else {

    }
}

Piece.prototype.moveRight = function() {
    if (!this.collision(1, 0, this.activeTetromino)) {
        this.unDraw();
        this.x++;
        this.draw();
    } else {

    }
}

Piece.prototype.collision = function(x, y, piece) {
    for (r = 0; r < piece.length; r++) {
        for (c = 0; c < piece.length; c++) {
            if (!piece[r][c]) { continue; }
            let newX = this.x + c + x;
            let newY = this.y + r + y;
            if (newX < 0 || newX >= COL || newY > ROW) {
                return true;
            }
            if (newY < 0) { continue; }
            if (board[newY][newX] != VACANT) {
                return true;
            }
        }
    }
    return false;
}



//https://www.youtube.com/watch?v=HEsAr2Yt2do