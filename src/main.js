const game = new Game();


function preload() {
  game.loadGame();
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.doRenderSomething();
  game.playCommand()
  game.takeTreasure()
  game.drawGrid();
}

