const game = new Game();

function preload() {
  game.preloadGame();

}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame();
}

function draw() {
  clear();
  game.treasure.drawTreasure();
  game.player1.drawPlayer();
  game.player2.drawPlayer();
  game.drawGrid();
  game.treasureFound();
}

function keyPressed() {
  if(keyCode === 40) {
      game.player1.moveDown();
  }
  if(keyCode === 38) {
      game.player1.moveUp();
  }
  if(keyCode === 37) {
      game.player1.moveLeft();
  }
  if(keyCode === 39) {
      game.player1.moveRight();
  }
  if(keyCode === 83) {
    game.player2.moveDown();
}
if(keyCode === 87) {
    game.player2.moveUp();
}
if(keyCode === 65) {
    game.player2.moveLeft();
}
if(keyCode === 68) {
    game.player2.moveRight();
} 
}

