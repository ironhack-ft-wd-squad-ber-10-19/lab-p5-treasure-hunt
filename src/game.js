class Game {
  constructor(){
    this.x = 0;
    this.y = 0;
  }
 
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

 preloadGame(){
  this.playerImg = loadImage("/assets/character-down.png");
}

setupGame(){
  this.player = new Player();
  this.player.image = this.playerImg;

}

drawGame(){
  this.drawGrid()
  this.player.drawPlayer()
}
}
