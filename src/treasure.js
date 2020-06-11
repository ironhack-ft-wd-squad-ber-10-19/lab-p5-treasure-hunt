class Treasure {
    constructor() {
        this.setRandomPosition()
    }
    setRandomPosition() {
        this.row = Math.ceil((Math.random() * (WIDTH - SQUARE_SIDE)) / 100) * SQUARE_SIDE
        this.col = Math.ceil((Math.random() * (HEIGHT - SQUARE_SIDE)) / 100) * SQUARE_SIDE
    }
}