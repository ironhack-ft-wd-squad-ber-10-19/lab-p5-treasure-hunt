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
  // game.treasureFound();
  game.gameIsFinished();
}

function keyPressed() {
  if(keyCode === 40) {
      game.player1.moveDown();
      game.treasureFound();
  }
  if(keyCode === 38) {
      game.player1.moveUp();
      game.treasureFound();
  }
  if(keyCode === 37) {
      game.player1.moveLeft();
      game.treasureFound();
  }
  if(keyCode === 39) {
      game.player1.moveRight();
      game.treasureFound();
  }
  if(keyCode === 83) {
    game.player2.moveDown();
    game.treasureFound();
}
if(keyCode === 87) {
    game.player2.moveUp();
    game.treasureFound();
}
if(keyCode === 65) {
    game.player2.moveLeft();
    game.treasureFound();
}
if(keyCode === 68) {
    game.player2.moveRight();
    game.treasureFound(); 
} 
}



