const game = new Game();

let playerImage;
let treasureImage;
function preload() {
  playerImage = loadImage("/../assets/character-down.png");
  treasureImage = loadImage("/../assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player_1.draw();
  treasure.draw();
  keyPressed = () => {
    if (keyCode === 37) {
      player_1.moveLeft();
    } else if (keyCode === 39) {
      player_1.moveRight();
    } else if (keyCode === 38) {
      player_1.moveUp();
    } else if (keyCode === 40) {
      player_1.moveDown();
    }
  };
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }

  moveUp() {
    if (this.row >= 100) {
      this.row -= 100;
    }
  }

  moveDown() {
    if (this.row <= 800) {
      this.row += 100;
    }
  }

  moveLeft() {
    if (this.col >= 100) {
      this.col -= 100;
    }
  }

  moveRight() {
    if (this.col <= 800) {
      this.col += 100;
    }
  }

  draw() {
    image(playerImage, this.col, this.row, 100, 100);
  }
}

const player_1 = new Player(0, 0);

class Treasure {
  constructor() {
    this.col;
    this.row;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }
  draw() {
    image(treasureImage, this.col, this.row, 100, 100);
    if (player_1.col === treasure.col && player_1.row === treasure.row) {
      image(treasureImage, this.col, this.row, 100, 100);
      treasure.setRandomPosition();
    }
  }
}

const treasure = new Treasure();
treasure.setRandomPosition();
