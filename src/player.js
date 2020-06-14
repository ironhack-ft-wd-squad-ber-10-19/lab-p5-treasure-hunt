class Player {
    
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
    }
    
    moveUp() {
        this.row -= SQUARE_SIDE;
        this.image = characterUp;
    }

    moveDown() {
        this.row += SQUARE_SIDE;
        this.image = characterDown;
    }

    moveRight() {
        this.col += SQUARE_SIDE;
        this.image = characterRight;
    }

    moveLeft() {
        this.col -= SQUARE_SIDE;
        this.image = characterLeft;
    }

    draw() {
        image(this.image || characterDown, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }
}