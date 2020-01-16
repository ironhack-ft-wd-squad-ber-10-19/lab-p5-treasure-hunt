const game = new Game();
let treasureImage;
const player = new Player(0, 0); // (0,0) = Initial position (col, row)
const treasure = new Treasure();
let charImageDown;
let charImageUp;
let charImageRight;
let charImageLeft;

function preload() {
  //console.log("PRELOAD");
  // preload assets to make them available in the setup and onwards ONCE
  // charImageDown = loadImage("mario.png");

  let imagesObject = {
    down: loadImage("./assets/character-down.png"),
    up: loadImage("./assets/character-up.png"),
    right: loadImage("./assets/character-right.png"),
    left: loadImage("./assets/character-left.png")
  };
  player.addImages(imagesObject);

  treasureImage = loadImage("./assets/treasure.png");

  // the setup function will wait for the preload to complete any loading operation
}

// function setup() {
//   //console.log("SETUP");
//   // setup the canvas/our game
//   createCanvas(800, 600); // width, height

//   // console.log(marioImage);
//   // frameRate(1);
// }

function setup() {
  let canvas = createCanvas(HEIGHT, WIDTH);
  canvas.parent("canvas");
}

function draw() {
  clear();
  background("white");
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
  player.checkCollision();
} // Increase by 1 the value of player.row

// player.moveUp(); // Increase by 1 the value of player.row
// player.moveRight(); // Increase by 1 the value of player.col
// player.moveLeft(); // Increase by 1 the value of player.col
// console.log(player.col, player.row); // => 1,2

function keyPressed() {
  // called once on key press
  console.log("key pressed", keyCode);
  const step = 100;
  if (keyCode === 37) {
    // left arrow
    player.moveLeft(step);
  } else if (keyCode === 39) {
    // right arrow
    player.moveRight(step);
  } else if (keyCode === 38) {
    player.moveUp(step);
  } else if (keyCode === 40) {
    player.moveDown(step);
  }
}
