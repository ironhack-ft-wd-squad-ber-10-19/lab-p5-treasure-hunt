let downImage;
let treasureImg;

function preload() {
  downImage = loadImage("./../assets/character-down.png");
  treasureImg = loadImage("./../assets/treasure.png");
}

const game = new Game();
// const player = new Player();
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}
function draw() {
  game.drawGrid();
  player.draw();
  treasure.draw();
  if (player.row === treasure.row && player.col === treasure.col) {
    clear(treasure);
    treasure.setRandomPosition();
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  preload() {
    this.downImage = downImage;
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
    }
  }

  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) {
      this.row += SQUARE_SIDE;
    }
  }

  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
    }
  }

  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {
      this.col += SQUARE_SIDE;
    }
  }

  draw() {
    image(downImage, this.col, this.row, 100, 100);
  }
}

// Iteration 4:
let player = new Player(100, 100);

function keyPressed() {
  // const step = 100;
  if (keyCode === 38) {
    // up arrow
    player.moveUp();
    // player.row -= step;
  } else if (keyCode === 40) {
    // down arrow
    player.moveDown();
  } else if (keyCode === 39) {
    // right arrow
    player.moveRight();
  } else if (keyCode === 37) {
    // left arrow
    player.moveLeft();
  }
  clear(player);
}

class Treasure {
  constructor() {
    this.col = this.setRandomPosition();
    this.row = this.setRandomPosition();
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random(WIDTH / 10) * 10) * 100;
    this.row = Math.floor(Math.random(HEIGHT / 10) * 10) * 100;
  }

  preload() {
    this.treasureImg = treasureImg;
  }

  draw() {
    image(treasureImg, this.col, this.row, 100, 100);
  }
}
let treasure = new Treasure();

treasure.setRandomPosition();
