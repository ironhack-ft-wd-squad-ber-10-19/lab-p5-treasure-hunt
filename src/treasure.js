// 5.1 create a Treasure class

class Treasure {
  constructor() {
    // 5.1 this is the treasure's starting position
    this.row = 100;
    this.col = 200;
  }

  // 5.1 this is the initial positioning of the treasure image + when it is re-drawn after collision
  drawTreasure() {
    image(treasureImg, this.col, this.row, side, side);
  }

  // this sets the treasure's starting position once it is re-drawn after a collision. It's called in the Player.js
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }
}
