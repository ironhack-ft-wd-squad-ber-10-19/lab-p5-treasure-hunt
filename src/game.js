class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (var x = 0; x <= width; x += width / 10) {
      for (var y = 0; y <= height; y += height / 10) {
        stroke(0);
        strokeWeight(2); 
        line(x, 0, x, height);
        line(0, y, width, y);
     } }
  }
  
  preloadGame(){
    this.playerImg = loadImage("/assets/character-down.png");
 

  }

  setupGame(){
    this.player = new Player();
    this.player.image = this.playerImg;
    
  }

  drawGame(){
    this.drawGrid()
    this.player.draw()
  }
}
