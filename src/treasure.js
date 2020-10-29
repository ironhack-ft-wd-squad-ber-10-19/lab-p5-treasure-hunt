class Treasure {
    constructor(){
      this.col = Math.floor(Math.random()*10) * WIDTH/10;
      this.row = Math.floor(Math.random()*10) * HEIGHT/10;
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