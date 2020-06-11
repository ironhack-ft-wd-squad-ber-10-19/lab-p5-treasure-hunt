const game = new Game();
let player = new Player(); 

function preload() {
  game.pleaseLoadGameImages(); 
  
}


function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvas");
}

function draw() {
  game.keyPressed(); 
  game.drawGrid();
}


// Test expected output: 
// player.moveDown(); 
// player.moveDown(); 
// player.moveRight(); 
// console.log(player.col, player.row); 