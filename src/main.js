const game = new Game();

function preload(){
  game.preloadGame()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame()
}

function draw() {
  clear()
  game.drawGame();
}

function keyPressed() {
  
  if (keyCode===38) {
      console.log("up arrow has been pressed");
  game.player.moveUp();
}

if (keyCode===40) {
  console.log("up down has been pressed");
  game.player.moveDown();
}

if (keyCode===37) {
  console.log("up left has been pressed");
  game.player.moveLeft();
}
if (keyCode===39) {
  console.log("up right has been pressed");
  game.player.moveRight();
}
}