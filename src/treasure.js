class Treasure {
    constructor() {
      this.col;
      this.row;
    }

    preLoadTreasure() {
      this.image = loadImage("../assets/treasure.png");
    }
 
    setRandomPosition() {
      this.col = Math.floor(Math.random() * 10);
      this.row = Math.floor(Math.random() * 10);
    }
    
    drawTreasure() {
      image(this.image, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
    }
  }