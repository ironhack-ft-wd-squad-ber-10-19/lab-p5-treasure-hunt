const game = new Game();

let playerImage;
let treasureImage;

function preload() {
  playerImage = loadImage("./assets/character-down.png");
  treasureImage = loadImage("/lab-p5-treasure-hunt/assets/treasure.png");
  playerRight = loadImage("/lab-p5-treasure-hunt/assets/character-right.png");
  playerLeft = loadImage("/lab-p5-treasure-hunt/assets/character-left.png");
  playerUp = loadImage("/lab-p5-treasure-hunt/assets/character-up.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === 40) {
    player.moveDown();
  } else if (keyCode === 38) {
    player.moveUp();
  } else if (keyCode === 37) {
    player.moveLeft();
  } else if (keyCode === 39) {
    player.moveRight();
  }
}
class Player {
  constructor() {
    this.column = 0;
    this.row = 0;
  }
  drawPlayer() {
    if (keyCode === 40) {
      image(playerImage, this.column, this.row, 100, 100);
    } else if (keyCode === 38) {
      image(playerUp, this.column, this.row, 100, 100);
    } else if (keyCode === 37) {
      image(playerLeft, this.column, this.row, 100, 100);
    } else if (keyCode === 39) {
      image(playerRight, this.column, this.row, 100, 100);
    }
  }
  moveDown() {
    this.row += SQUARE_SIDE;
  }
  moveUp() {
    this.row -= SQUARE_SIDE;
  }
  moveLeft() {
    this.column -= SQUARE_SIDE;
  }
  moveRight() {
    this.column += SQUARE_SIDE;
    console.log("right");
    image(playerRight, this.column, this.row, 100, 100);
  }
}
const player = new Player(0, 0);

class Treasure {
  constructor() {
    this.column;
    this.row;
  }

  setRandomPosition() {
    this.column = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }
  drawTreasure() {
    image(treasureImage, this.column, this.row, 100, 100);
    if (player.column === treasure.column && player.row === treasure.row) {
      image(treasureImage, this.column, this.row, 100, 100);
      treasure.setRandomPosition();
    }
  }
}

const treasure = new Treasure();
treasure.setRandomPosition();

console.log(player.col, player.row);
