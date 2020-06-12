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
      image(treasureImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }
  }