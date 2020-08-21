class Treasure {
    constructor (col, row) {
        this.col = col;
        this.row = row;
        this.image;
    }
    preloadTreasure() {
        this.image = loadImage("assets/treasure.png")
    }

    setRandomPosition() {
        let numberCol = Math.floor(Math.random() * 10);
        let numberRow = Math.floor(Math.random() * 10)
        this.row = numberRow * SQUARE_SIDE;
        this.col = numberCol * SQUARE_SIDE;
        
        // if(numberCol % 100 !== 0) {
        //         numberCol--
        // } else {
        //     this.col = numberCol;
        // }
        // if(numberRow % 100 !== 0) {
        //     numberRow--
        // } else {
        //     this.row = numberRow;
        // }

    }

    drawTreasure() {
        image(this.image, this.col, this.row, 100, 100)
    }
}