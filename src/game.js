class Player {
  constructor() {
    this.col=0; 
    this.row=0; 
  }
  moveUp() {
    console.log("Move up")
    this.row-=1; 
  }
  moveDown() {
    console.log("Move down")
    this.row+=1; 
  }
  moveLeft() {
    console.log("Move left")
    this.col-=1; 
  }
  moveRight() {
    console.log("Move right")
    this.col+=1; 
  }

}


class Game {
  drawGrid() {
    for (let x=0; x<width; x+=width/10) {
      for (let y=0; y<innerHeight; y+=height/10) {
        stroke(0); 
        strokeWeight(1); 
        line(x, 0, x, height);
        line(0, y, width, y); 
    }
  }
 }
 pleaseLoadGameImages() {
  this.player=new Player(); 
  this.playerImg=loadImage("assets/character-down.png")
}
 keyPressed() {
   clear(); 
   frameRate(30); 
   image(this.playerImg, this.player.col, this.player.row, 0, 0)
  if (keyIsDown(38)) {
    console.log("Arrow up is pressed"); 
    this.player.moveUp();  
  }
  if (keyIsDown(40)) {
    console.log("Arrow down is pressed"); 
    this.player.moveDown();  
  }
  if (keyIsDown(37)) {
    console.log("Arrow left is pressed"); 
    this.player.moveLeft();  
  }
  if (keyIsDown(39)) {
    console.log("Arrow right is pressed"); 
    this.player.moveRight();  
  }
}
}
