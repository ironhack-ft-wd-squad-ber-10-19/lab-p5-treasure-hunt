class Game {

  drawGrid() {
  for (let x = 0; x <= width; x += width / 10) {
		for (let y = 0; y <= height; y += height / 10) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
  }
}

class Player {
  constructor(row,col) {
    this.col = col;
    this.row = row;
    this.image;
  }

  preLoadPlayer(){
    this.image = loadImage('../assets/character-down.png');
  }

  moveUp(){
      if (this.row > 0){
      this.row -= 1;
      this.image = loadImage('../assets/character-up.png');
    }
  }

  moveDown(){
      if (this.row < 9){
      this.row += 1;
      this.image = loadImage('../assets/character-down.png');
    }
  }

  moveLeft(){
      if (this.col > 0){
      this.col -= 1;
      this.image = loadImage('../assets/character-left.png');
    }
  }

  moveRight(){
      if (this.col < 9)
      this.col += 1;
      this.image = loadImage('../assets/character-right.png');
  }

  drawPlayer() {
    image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
  }
}

class Player2 {
  constructor(row,col) {
    this.col = col;
    this.row = row;
    this.image;
  }

  preLoadPlayer2(){
    this.image = loadImage('../assets/character2-down copy.png');
  }

  moveUp(){
      if (this.row > 0){
      this.row -= 1;
      this.image = loadImage('../assets/character2-up copy.png');
    }
  }

  moveDown(){
      if (this.row < 9){
      this.row += 1;
      this.image = loadImage('../assets/character2-down copy.png');
    }
  }

  moveLeft(){
      if (this.col > 0){
      this.col -= 1;
      this.image = loadImage('../assets/character2-left copy.png');
    }
  }

  moveRight(){
      if (this.col < 9)
      this.col += 1;
      this.image = loadImage('../assets/character2-right copy.png');
  }

  drawPlayer2() {
    image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
  }
}


class Treasure {
  constructor() {
    this.col;
    this.row;
    this.image;
  }  

  preLoadTreasure(){
    this.image = loadImage('../assets/treasure.png');
  }



  setRandomPosition() {
  this.row = Math.round(Math.random()*10);
  this.col = Math.round(Math.random()*10);
  
  }

  drawTreasure() {
    image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
  }


}
