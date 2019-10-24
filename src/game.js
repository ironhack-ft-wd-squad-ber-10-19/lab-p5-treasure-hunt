/* eslint-disable */

class Game {
  drawGrid() {
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, WIDTH);
    }
    for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, HEIGHT, y);
    }
  }
}

class Player {
  constructor(row, col) {
    this.col = col;
    this.row = row;
    this.direction = 'down';
  }
  moveUp() {
    this.col -= 1 * SQUARE_SIDE;
  }
  moveDown() {
    this.col += 1 * SQUARE_SIDE;
  }
  moveLeft() {
    this.row -= 1 * SQUARE_SIDE;
  }
  moveRight() {
    this.row += 1 * SQUARE_SIDE;
  }

  draw() {
    switch(this.direction) {
      case 'down':
        image(playerDown, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE)
        break;
      case 'left':
          image(playerLeft, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE);
        break;
      case 'right':
          image(playerRight, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE);
          break;
      case 'up':
          image(playerUp, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE)
          break;
    }
  }
}

let player1 = new Player(0 * SQUARE_SIDE, 0 * SQUARE_SIDE);
let player2 = new Player(9 * SQUARE_SIDE, 0 * SQUARE_SIDE);

class Treasure {
  constructor() {
    this.row = 0;
    this.col = 0;
  }
  setRandomPosition() {
    const randomX = Math.floor(Math.random() * 10);
    const randomY = Math.floor(Math.random() * 10); 
    this.row = randomX;
    this.col = randomY;
  }
  drawTreasure() {
    image(treasureImg, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE)
  }
}

let treasure = new Treasure();