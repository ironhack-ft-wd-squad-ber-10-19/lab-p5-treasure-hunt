class Treasure {
    constructor(){
      this.col = 500;
      this.row = 500;
      this.image;
    }
    drawTreasure(){
      fill('blue');
    //   clear();
    //   game.drawGrid();
    //   main.draw();
      image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    //   rect(5, 5, 40, 4x0);
    }
  }