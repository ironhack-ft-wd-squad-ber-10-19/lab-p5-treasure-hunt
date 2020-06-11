class Treasure {
    constructor() {
        this.col = this.setRandomPosition()
        this.row = this.setRandomPosition()

    }
    setRandomPosition() {
        return Math.ceil((Math.random() * (HEIGHT)) / 100) * 100
    }
}