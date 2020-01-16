class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  randomPosition() {
    this.row = Math.floor(Math.random(this.row) * 11) * 100;
    this.col = Math.floor(Math.random(this.col) * 11) * 100;
  }

  drawTreasure() {
    image(treasureImage, this.row, this.col, 100, 100);
  }
}
