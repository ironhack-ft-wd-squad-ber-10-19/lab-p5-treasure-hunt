const game = new Game();
let img;


function preload() {
  img = loadImage('assets/character-down.png')
}
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
};
function draw() {
  game.drawGrid();
  image(img, 0, 0);
}


