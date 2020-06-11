const game = new Game();


// functions pre load loading the elements of the game
function preload() {
  game.loadGame();
}

// create a Canvas element in the DOM
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

// start the game
function draw() {

  game.doRenderSomething();
  game.playCommand()
  game.takeTreasure()
  game.drawGrid();


}

