class Treasure {
  constructor(){
    this.col = 0;
    this.row = 0;
    this.img = '';
  }

  setup() {
    this.img = loadImage('./assets/treasure.png');
    this.setRandomPosition();

  }

  setRandomPosition(){
    this.col = (Math.random() * 9).toFixed(0) * SQUARE_SIDE;
    this.row = (Math.random() * 9).toFixed(0) * SQUARE_SIDE;
  }

  drawTreasure(){
    image(this.img,this.col + SQUARE_SIDE * 0.1,this.row + SQUARE_SIDE * 0.1, SQUARE_SIDE * 0.8, SQUARE_SIDE * 0.8);
  }

}