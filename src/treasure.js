class Treasure {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.image
    }

    setRandomPosition(){
        this.col = Math.floor(Math.random() * 10)*100;
        this.row = Math.floor(Math.random() * 10)*100;
        
    }

    drawTreasure() {
        image(this.image, this.col, this.row, 100, 100);
    }
}