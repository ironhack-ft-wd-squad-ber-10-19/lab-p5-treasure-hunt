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
  game.win();
  
}

function keyPressed(){
  if (keyCode === 37) {
    // game.x -= 5;
    // console.log('left')
    game.player.moveLeft();
    game.player.image = loadImage('/assets/character-left.png');
    }

if (keyCode === 39) {
    // game.x += 5;
    game.player.moveRight()
    game.player.image = loadImage('/assets/character-right.png');
    }
if (keyCode === 40) {
    // game.y += 5;
    game.player.moveDown()
    game.player.image = loadImage('/assets/character-down.png')
    }
if (keyCode === 38) {
    game.player.moveUp()
    game.player.image = loadImage('/assets/character-up.png')
    }
if (keyCode === 83) {
    game.player2.moveDown()
    // game.player.image = loadImage('/assets/character-up.png')
    }
if (keyCode === 87) {
  game.player2.moveUp()
  // game.player.image = loadImage('/assets/character-up.png')
  }
if (keyCode === 68) {
  game.player2.moveRight()
  // game.player.image = loadImage('/assets/character-up.png')
  }
if (keyCode === 65) {
  game.player2.moveLeft()
  // game.player.image = loadImage('/assets/character-up.png')
  }
    
  } 



  // console.log('test')


  
// const player = new Player(0,0)
// player.moveDown()
// player.moveDown()
// player.moveRight()
// console.log(player.col, player.row