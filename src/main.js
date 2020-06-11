const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  background (c);
  image(img, 25, 25, 50, 50);
}


let player = new Player();
function preload() {
  playerImg = loadImage('assets/character-down.png');
}
