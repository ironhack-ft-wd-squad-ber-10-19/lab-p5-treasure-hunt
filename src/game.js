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
    this.image = loadImage('../assets/character-down.png');
  }

  moveUp(){
      this.row += 1;
      this.image = loadImage('../assets/character-up.png');
  }

  moveDown(){
      this.row -= 1;
      this.image = loadImage('../assets/character-down.png');
  }

  moveLeft(){
      this.col -= 1;
      this.image = loadImage('../assets/character-left.png');
  }

  moveRight(){
      this.col += 1;
      this.image = loadImage('../assets/character-right.png');
  }

  drawPlayer() {
    image(this.image,this.col*SQUARE_SIDE,this.row*SQUARE_SIDE,SQUARE_SIDE,SQUARE_SIDE);
  }
}

class Treasure {
  constructor(row,col) {
    this.col = col;
    this.row = row;
    this.image = loadImage('../assets/treasure.png');
  }  

  setRandomPosition() {

  }


}
