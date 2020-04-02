const game = new Game();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
}

function draw() {
    game.drawGrid();
    //player.draw();
}
let img;
function preload() {
    img = loadImage("../assets/character-down.png");
}
class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    moveUp() {
        this.row--;
        console.log("moveUp");
    }
    moveDown() {
        this.row++;
        console.log("moveDown");
    }
    moveLeft() {
        this.col--;
        console.log("moveLeft");
    }
    moveRight() {
        this.col++;
        console.log("moveRight");
    }
    draw() {
        console.log("yo");
    }
}

const player = new Player(0, 0); // (0,0) = Initial position (col, row)
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
console.log(player.col, player.row); // => 1,2
