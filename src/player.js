class Player {
    constructor(col, row) {
        this.col = 0; // column is x
        this.row = 0; // row is y
        this.score = 0;
        // this.img = im
    }

    moveUp() {
        this.row -= SIDE;
    }

    moveDown() {
        this.row += SIDE;

    }

    moveLeft() {
        this.col -= SIDE;
    }

    moveRight() {
        this.col += SIDE;
    }

    drawPlayer(playerDirection) {
        if (playerDirection === "down") {
            image(imgPlayerDown, this.col, this.row, SIDE, SIDE);
        } else if (playerDirection === "up") {
            image(imgPlayerUp, this.col, this.row, SIDE, SIDE);
        } else if (playerDirection === "left") {
            image(imgPlayerLeft, this.col, this.row, SIDE, SIDE);
        } else if (playerDirection === "right") {
            image(imgPlayerRight, this.col, this.row, SIDE, SIDE);
        }
    }
}