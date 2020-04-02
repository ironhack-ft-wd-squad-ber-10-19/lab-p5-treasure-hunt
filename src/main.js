const game = new Game();

const player1 = new Player (0, 0);
const treasure1 = new Treasure();

function preload () {
  img = loadImage(
    "assets/character-down.png"
  );

treasure = loadImage(
  "assets/treasure.png"
  );
 
}


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

}



function draw() {
  clear();
  game.drawGrid();

  image(img, player1.initialX, player1.initialY, SQUARE_SIDE, SQUARE_SIDE);

  image(treasure, treasure1.randomX, treasure1.randomY, SQUARE_SIDE, SQUARE_SIDE);

  if (player1.initialX === treasure1.randomX && player1.initialY === treasure.randomY) {
    treasure1.randomX = 0
    treasure1.randomY = 0
  }
}


function keyPressed() {

  if (keyCode === 40) {
    player1.moveDown();
  }

  if (keyCode === 38) {
    player1.moveUp();
  }

  if (keyCode === 39) {
    player1.moveRight();
  }

  if (keyCode === 37) {
    player1.moveLeft();
  }
}

