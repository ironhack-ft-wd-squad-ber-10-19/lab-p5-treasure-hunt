class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    //0,   0, 800,   0 +   0, 0,   0, 800
    //0,  80, 800,  80 +  80, 0,  80, 800
    //0, 160, 800, 160 + 160, 0, 160, 800
    //0, 240, 800, 240 + 240, 0, 240, 800
    // direction of drawing from top-left to bottom-right

    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
    }
  }
}

class Player {
  constructor(posX, posY) {
    this.col = posX;
    this.row = posY;
  }

  moveUp() {
    this.row -= SQUARE_SIDE;
    console.log(posX, posY);
  }
  moveDown() {
    this.row += SQUARE_SIDE;
    console.log(posX, posY);
  }
  moveLeft() {
    this.col -= SQUARE_SIDE;
    console.log(posX, posY);
  }
  moveRight() {
    this.col += SQUARE_SIDE;
    console.log(posX, posY);
    //--> imgPlayer = imgPlayerRight;
  }

  draw() {
    image(imgPlayerDown, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}

function keyPressed() {
  // 38 -> arrow up, 40 -> arrow down, 37 -> arrow left, 39 -> arrow right
  if (keyCode == 38) {
    player.moveUp();
  } else if (keyCode == 40) {
    player.moveDown();
  } else if (keyCode == 37) {
    player.moveLeft();
  } else if (keyCode == 39) {
    player.moveRight();
  }
}

class Treasure {
  constructor(row, col) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    this.row = Math.floor(randomX * SQUARE_SIDE);
    this.col = Math.floor(randomY * SQUARE_SIDE);
  }

  drawTreasure() {
    image(imgTreasure, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
