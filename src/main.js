const game = new Game();
// const player = new Player();

function preload(){
  game.preLoadGame();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setupGame();
}

function draw() {
  game.drawGrid();
  game.drawGame();
}

function keyPressed(){
  if (keyCode === 37) {
    // game.x -= 5;
    // console.log('left')
    game.player.moveLeft()
    }

if (keyCode === 39) {
    // game.x += 5;
    game.player.moveRight()
    }
if (keyCode === 40) {
    // game.y += 5;
    game.player.moveDown()
    }
if (keyCode === 38) {
    game.player.moveUp()
    } 
  // console.log('test')
}

// const player = new Player(0,0)
// player.moveDown()
// player.moveDown()
// player.moveRight()
// console.log(player.col, player.row)