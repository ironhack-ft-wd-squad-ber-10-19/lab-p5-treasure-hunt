class Game {
  drawGrid() {
    square(0, 0, 1000);
    line(0, 100, 1000, 100);
    line(0, 200, 1000, 200);
    line(0, 300, 1000, 300);
    line(0, 400, 1000, 400);
    line(0, 500, 1000, 500);
    line(0, 600, 1000, 600);
    line(0, 700, 1000, 700);
    line(0, 800, 1000, 800);
    line(0, 900, 1000, 900);
    line(100, 0, 100, 1000);
    line(200, 0, 200, 1000);
    line(300, 0, 300, 1000);
    line(400, 0, 400, 1000);
    line(500, 0, 500, 1000);
    line(600, 0, 600, 1000);
    line(700, 0, 700, 1000);
    line(800, 0, 800, 1000);
    line(900, 0, 900, 1000);
  }
}

class Player {
  constructor(x, y) {
    this.x = Math.floor(Math.random() * 9) * 100;
    this.y = Math.floor(Math.random() * 9) * 100;
  }

  moveUp() {
    this.y -= SQUARE_SIDE;
  }
  moveDown() {
    this.y += SQUARE_SIDE;
  }
  moveLeft() {
    this.x -= SQUARE_SIDE;
  }
  moveRight() {
    this.x += SQUARE_SIDE;
  }
  draw() {
    image(img, this.x, this.y, 100, 100);
  }
}

class Treasure {
  constructor(x, y) {
    this.x = 0;
    this.y = 0;
  }
  setRandomPosition() {
    this.x = Math.floor(Math.random() * 9) * 100;
    this.y = Math.floor(Math.random() * 9) * 100;
  }
  drawTreasure() {
    image(treasureImg, this.x, this.y, 100, 100);
  }
}
