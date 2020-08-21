class Game {
  constructor(){

  }
  
  preloadGame(){
    console.log("preload in game");
    this.playerImg = loadImage("assets/character-down.png");
  }  
  
  setupGame() {
    console.log("setup in game");
    this.player = new Player();
    this.player.image = this.playerImg;
  }  


  drawGrid() {
    
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 1000;
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    //verticals
    line(this.x1, this.x2, this.y1, this.y2);
    for (let i = 0; i <= 10; i++) {
      this.x1 += 100;
      this.y1 += 100;
      line(this.x1, this.x2, this.y1, this.y2);
    }
    //horizontals
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 1000;
    this.y2 = 0;
    line(this.x1, this.x2, this.y1, this.y2);
    for (let i = 0; i <= 10; i++) {
      this.x2 += 100;
      this.y2 += 100;
        line(this.x1, this.x2, this.y1, this.y2);
      }
      this.player.draw();
      
  }


}
