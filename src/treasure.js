class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    setRandomPosition() {
        this.col = Math.ceil((Math.random() * (WIDTH - SQUARE_SIDE)) / 100) * SQUARE_SIDE
        this.row = Math.ceil((Math.random() * (WIDTH - SQUARE_SIDE)) / 100) * SQUARE_SIDE
    }

    draw() {
        image(treasureImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }
}