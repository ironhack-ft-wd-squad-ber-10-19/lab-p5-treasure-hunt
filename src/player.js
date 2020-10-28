class Player {
    constructor(){
    this.col = 0;
      this.row = 0;
      this.image;
    }
    drawPlayer(){
      fill('blue');
      clear();
      game.drawGrid();
    //   main.draw();
      image(this.image, this.col, this.row, 100, 100);
    //   rect(5, 5, 40, 4x0);
    }
    moveUp(){
      this.row -= 100;
      this.image = loadImage('/assets/character-up.png')
      
    }
    moveDown(){
      this.row += 100;
      this.image = loadImage('/assets/character-down.png')
    }
    moveLeft(){
      this.col -= 100
      this.image = loadImage('/assets/character-left.png')
    }
    moveRight(){
      this.col += 100;
      this.image = loadImage('/assets/character-right.png')
    }
  }