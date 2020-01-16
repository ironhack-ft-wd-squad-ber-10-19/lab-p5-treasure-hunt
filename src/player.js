class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.playerImages = {};
    this.currentDirection = "right";
  }

  draw() {
    if (this.currentDirection === "right") {
      image(this.playerImages.right, this.row, this.col, 100, 100);
    } else if (this.currentDirection === "down") {
      image(this.playerImages.down, this.row, this.col, 100, 100);
    } else if (this.currentDirection === "left") {
      image(this.playerImages.left, this.row, this.col, 100, 100);
    } else if (this.currentDirection === "up") {
      image(this.playerImages.up, this.row, this.col, 100, 100);
    }
  }

  addImages(images) {
    this.playerImages = images;
  }

  moveDown(step) {
    if (this.col >= 900) {
      this.col = 900;
    } else {
      this.col += step;
    }
    this.currentDirection = "down";
  } // Increase by 1 the value of player.row

  moveUp(step) {
    if (this.col <= 0) {
      this.col = 0;
    } else {
      this.col -= step;
    }
    this.currentDirection = "up";
  }
  // Increase by 1 the value of player.row

  moveRight(step) {
    if (this.row >= 900) {
      this.row = 900;
    } else {
      this.row += step;
    }
    this.currentDirection = "right";
  } // Increase by 1 the value of player.row

  moveLeft(step) {
    if (this.row <= 0) {
      this.row = 0;
    } else {
      this.row -= step;
    }
    this.currentDirection = "left";
  } // Increase by 1 the value of player.row

  checkCollision() {
    if (this.row === treasure.row && this.col === treasure.col) {
      treasure.randomPosition();
    }
  }
}
