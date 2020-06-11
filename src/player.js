class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    moveUp() {
        console.log('move Up')
        this.col += SQUARE_SIDE
    }
    moveDown() {
        console.log('move Down')
        this.col -= SQUARE_SIDE
    }
    moveLeft() {
        console.log('move Left')
        this.row -= SQUARE_SIDE
    }
    moveRight() {
        console.log('move Right')
        this.row += SQUARE_SIDE
    }
}