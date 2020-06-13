class Treasure {
    constructor() {
        //initial position
        this.column=WIDTH/2;
        this.row=HEIGHT/2;
    }
    drawTreasure() {
        image(treasureImg, this.column, this.row, SQUARE_SIDE, SQUARE_SIDE);
    }
    placeRandomly() {
        this.column=Math.floor(Math.random()*10)*SQUARE_SIDE;
        this.row=Math.floor(Math.random()*10)*SQUARE_SIDE;
    }
}