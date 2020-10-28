class Game {

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
        stroke(0);
        strokeWeight(2);
        line(x, 0, x, HEIGHT);
        line(0, y, WIDTH, y);
      }
    }

  }
}

class Player {
  constructor (row,col) {
    this.col=col;
    this.row=row;
    this.image;
  }

  moveUp(){
    this.row-=1;
    this.image=loadImage('../assets/character-up.png')
    
  }

  moveDown(){
    this.row+=1;
    this.image=loadImage('../assets/character-down.png')

  }

  moveLeft(){
    this.col-=1;
    this.image=loadImage('../assets/character-left.png')

  }

  moveRight(){
    this.col+=1;
    this.image=loadImage('../assets/character-right.png')

  }

  preload(){
    this.image=loadImage('../assets/character-down.png')
  }

  draw(){
    image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
  }




}

class Treasure {
  constructor() {
    this.row;
    this.col;
    this.image;
  }

  setRandomPosition(){
    // console.log(Math.round(Math.random()*10))
    this.row=Math.round(Math.random()*10);
    this.col=Math.round(Math.random()*10);
  }

  preload(){
    this.image=loadImage('../assets/treasure.png')
  }

  drawTreasure(){
    image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);

  }
}
