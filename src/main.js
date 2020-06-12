// this creates a new game using the Game() CLASS.
const game = new Game();

// This is where we declare the variables for the pre-load
let characterDown;
let characterLeft;
let characterRight;
let characterUp;
let treasureImg;

// The pre-load give us access to assets used in the game like audio and image files. The loadImage function is P5 specific
function preload() {
  characterDown = loadImage("assets/character-down.png");
  characterLeft = loadImage("assets/character-left.png");
  characterRight = loadImage("assets/character-right.png");
  characterUp = loadImage("assets/character-up.png");
  treasureImg = loadImage("assets/treasure.png");
}

// The setup() function is called once when the program starts. It's used to define initial environment properties such as the canvas size +
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}
// The draw function renders the page 60 times per second.
function draw() {
  // the clear function clears the canvas every time the page loads. Comment it in and out to see what this means.
  clear();
  // these functions are called every time the page re-renders/is re drawn (60 times a second)

  // 1.2 call the drawGrid() function here to render it
  game.drawGrid();
  // 5.2 call the drawTreasure function
  game.treasure.drawTreasure();
  // 3.3 call the player1 draw function
  game.player1.draw();
  game.player2.draw();
}

// 4.1 This function handles interaction on the page. The {&& game.player1.col < 1000 - side} handles if the character is heading off the canvas.
function keyPressed() {
  if (keyCode === 37 && game.player1.col > 0) {
    game.player1.moveLeft();
  } else if (keyCode === 39 && game.player1.col < 1000 - side) {
    game.player1.moveRight();
  } else if (keyCode === 40 && game.player1.row < 1000 - side) {
    game.player1.moveDown();
  } else if (keyCode === 38 && game.player1.row > 0) {
    game.player1.moveUp();
  }
  if (keyCode === 65 && game.player2.col > 0) {
    game.player2.moveLeft();
  } else if (keyCode === 68 && game.player2.col < 1000 - side) {
    game.player2.moveRight();
  } else if (keyCode === 83 && game.player2.row < 1000 - side) {
    game.player2.moveDown();
  } else if (keyCode === 87 && game.player2.row > 0) {
    game.player2.moveUp();
  }
}
