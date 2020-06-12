class Treasure {
    constructor(col, row){
      this.col = col
      this.row = row
    }
    setRandomPosition(){
      this.col = Math.floor(Math.random() * 10) * 100;
      this.row = Math.floor(Math.random() * 10) * 100;
    }
    drawTreasure() {
      image(treasureImg, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE)
    }
  }