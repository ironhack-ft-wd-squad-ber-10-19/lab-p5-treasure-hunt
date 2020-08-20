const game = new Game();

let playerImg;
const player = new Player(1,5);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  playerImg = loadImage('assets/character-down.png');
}

function draw() {
  game.drawGrid();
  player.draw(playerImg);
}

