const game = new Game();
let character;
let treasurePic;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();

  game.drawGrid();
  player1.draw();
  treasure1.draw();

  //tresure1.draw();

  /* if (keyIsDown(40)) {
    if (this.row >= 1000) {
      this.row -= 100;
    }
  } */
}

function preload() {
  character = loadImage("../assets/character-down.png");
  treasurePic = loadImage("../assets/treasure.png");
}

class Player {
  constructor(row, col) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= 100;
    }
  }

  moveDown() {
    if (this.row < 900) {
      this.row += 100;
    }
  }

  moveLeft() {
    if (this.col > 0) {
      this.col -= 100;
    }
  }

  moveRight() {
    if (this.col < 900) {
      this.col += 100;
    }
  }
  draw() {
    image(character, this.col, this.row, 100, 100);
  }
}

function keyPressed() {
  // called once on key press
  console.log("key pressed", keyCode);
  const step = 100;
  if (keyCode === 38) {
    // left arrow
    // this.col -= step;
    player1.moveUp();
  } else if (keyCode === 40) {
    // right arrow
    player1.moveDown();
  } else if (keyCode === 37) {
    player1.moveLeft();
  } else if (keyCode === 39) {
    player1.moveRight();
  }
}

const player1 = new Player(0, 0);
//player1.moveDown();
console.log(player1);

/* let randomNumberA = [];
let randomNumberB = [];
let randomTop = `randomNumberA ${00}`;
let randomLeft = `randomNumberB ${00}`;

const tresure1 = new Treasure(randomTop, randomLeft); */

class Treasure {
  constructor(row, col) {
    this.col = col;
    this.row = row;
  }
  draw() {
    image(treasurePic, this.col, this.row, 100, 100);
  }
}

const treasure1 = new Treasure(200, 200);
console.log(treasure1);

//tresure1.Math.randam(){

/* let randomTresure = drawTreasure(function(randomTop, randomLeft) {
  if (player1.currentPosition === tresure1.currentPosition) {
    return randomTresure;
  } else {
    tresure1.currentPosition += 0;
  }
}); */
