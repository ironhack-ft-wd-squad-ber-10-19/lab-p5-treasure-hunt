class Game {
    drawGrid() {
        // Iteration 1
        // Draw the grid
        // https://p5js.org/reference/#/p5/line
        for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
            for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
                line(x, 0, x, HEIGHT);
                line(0, y, WIDTH, y);
            }
        }
    }
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
}

const player = new Player(0, 0); // (0,0) = Initial position (col, row)
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
console.log(player.col, player.row); // => 1,2
