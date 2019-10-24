let charUp;
let charDown;
let charLeft;
let charRight;
let treasure;

function preload() {
  charUp = loadImage("/assets/character-up.png")
  charDown = loadImage("/assets/character-down.png")
  charLeft = loadImage("/assets/character-left.png")
  charRight = loadImage("/assets/character-right.png")
  treasure = loadImage("/assets/treasure.png")
}

class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (var x = 0; x <= WIDTH; x += WIDTH / 10) { // DRAWING THE VERTICAL LINES
      stroke(0);
      strokeWeight(1);
      line(x, 0, x, HEIGHT);
    }
    for (var y = 0; y <= HEIGHT; y += HEIGHT / 10) { // DRAWING THE HORIZONTAL LINES
      stroke(0);
      strokeWeight(1);
      line(0, y, WIDTH, y);
    }
  }
  collisionDetection() {
    if (player1.row === treasure1.row && player1.col === treasure1.col) {
      treasure1.setRandomPosition();
      document.querySelector('.play1Score').innerText++;
    }
    if (player2.row === treasure1.row && player2.col === treasure1.col) {
      treasure1.setRandomPosition();
      document.querySelector('.play2Score').innerText++;
    }
  }
}

class Player1 {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  };
  moveLeft() {
    this.row -= WIDTH / 10;;
  }
  moveRight() {
    this.row += WIDTH / 10;
  }
  moveUp() {
    this.col -= HEIGHT / 10;
  }
  moveDown() {
    this.col += HEIGHT / 10;
  }
  draw() {
    if (keyCode === 37) {
      // move left
      image(charLeft, this.row, this.col, 50, 50);
    } else if (keyCode === 39) {
      // move right
      image(charRight, this.row, this.col, 50, 50);
    } else if (keyCode === 38) {
      // move up
      image(charUp, this.row, this.col, 50, 50);
    } else {
      image(charDown, this.row, this.col, 50, 50);
    }
  }
}

class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  drawTreasure() {
    image(treasure, this.row, this.col, WIDTH / 10, HEIGHT / 10)
  }
  setRandomPosition() {
    this.row = (Math.floor(random() * 10) * WIDTH / 10);
    this.col = (Math.floor(random() * 10) * HEIGHT / 10);
  }
}

class Player2 {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  };
  moveLeft() {
    this.row -= WIDTH / 10;;
  }
  moveRight() {
    this.row += WIDTH / 10;
  }
  moveUp() {
    this.col -= HEIGHT / 10;
  }
  moveDown() {
    this.col += HEIGHT / 10;
  }
  draw() {
    if (keyCode === 65) {
      // move left
      image(charLeft, this.row, this.col, 50, 50);
    } else if (keyCode === 68) {
      // move right
      image(charRight, this.row, this.col, 50, 50);
    } else if (keyCode === 87) {
      // move up
      image(charUp, this.row, this.col, 50, 50);
    } else {
      image(charDown, this.row, this.col, 50, 50);
    }
  }
}