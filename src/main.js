const game = new Game();

function preload() {
  romImg = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(600, 600); 
  canvas.parent("canvas");  // spricht die ID im HTML an
}

function draw() {
  //game.pleaseLoadGameImages();

  //game.doSomething()
  game.drawGrid();
  player.drawPlayer();
}

class Player {
  constructor(x,y){
    this.col = x; 
    this.row = y ;
    //console.log(col,row)
  }
  drawPlayer() {
    frameRate(10);
    image(romImg, this.row, this.col, 60, 60)
  }

  moveUp() {
    this.col -= 60;
  }

  moveDown() {
    this.col += 60;
  }
  moveLeft() {
    this.row -= 60;
  }
  moveRight() {
    this.row += 60;
  }

}


 const player = new Player(0,0) // (0,0) = Initial position (col, row)
 player.moveDown() // Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveRight() // Increase by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2


