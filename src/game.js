class Player {
  constructor() {
    this.x = (Math.floor(Math.random() * 10))*100;
    this.y = (Math.floor(Math.random() * 10))*100;

    

  }

  pleaseLoadGameImages() {


  }

 

// Moviments for the players

  moveUp() {
    this.y -= HEIGHT/10;
    
  }
  moveDown() {
    this.y += HEIGHT/10;
    
  }
  moveLeft() {
    this.x -= WIDTH/ 10;
  }
  moveRight() {
    this.x += WIDTH/10;
  }


}

class Treasure {
  constructor() {
    this.x = 100;
    this.y = 100;
  }

  pleaseLoadGameImages() {
 
  }



}

class Game {
  
  constructor() {
    this.x = 0;
    this.y = 0;    
    
  }

  pleaseLoadGameImages(){
    
    this.viking = new Player ()
    this.vikingImg = loadImage("assets/character-down.png")
    this.vikingImgUp = loadImage("assets/character-up.png")
    this.vikingImgRight = loadImage("assets/character-right.png")
    this.vikingImgLeft = loadImage("assets/character-left.png")
    this.viking.img = this.vikingImg

    this.treasure = new Treasure ()
    this.treasureImg = loadImage("assets/treasure.png")

    this.backgroundImg = loadImage("assets/background.jpg")

  }
  
  drawGrid() {
    // Iteration 1
    // Draw the grid 
    // https://p5js.org/reference/#/p5/line
    clear ()

    background(this.backgroundImg)

    for(let j = 0 ; j * SQUARE_SIDE < WIDTH ; j++ ){
        for( let i = 0 ; i * SQUARE_SIDE<HEIGHT;i++){
          line (j*SQUARE_SIDE ,i*SQUARE_SIDE ,(j+1)*SQUARE_SIDE ,i*SQUARE_SIDE)
          line (j*SQUARE_SIDE ,i*SQUARE_SIDE ,j*SQUARE_SIDE ,(i+1)*SQUARE_SIDE)
          line ((j+1)*SQUARE_SIDE ,i*SQUARE_SIDE ,(j+1)*SQUARE_SIDE ,(i+1)*SQUARE_SIDE)
          line ( j*SQUARE_SIDE,(i+1)*SQUARE_SIDE ,(j+1)*SQUARE_SIDE ,(i+1)*SQUARE_SIDE)          
        }        
    }
    
    
    image(this.viking.img, this.viking.x, this.viking.y, 100, 100);
    image(this.treasureImg, this.treasure.x, this.treasure.y, 100, 100);

    if( this.viking.x == this.treasure.x && this.viking.y == this.treasure.y){
      this.treasure.x = (Math.floor(Math.random() * 10))*100;
      this.treasure.y = (Math.floor(Math.random() * 10))*100;
    }

  }
  


  doSomething() {


    if (keyIsDown(87)) {
      console.log("we are pressing w");
      this.viking.moveUp();
    }
    if (keyIsDown(83)) {
      console.log("we are pressing s");
      this.viking.moveDown();
    }
    if (keyIsDown(65)) {
      console.log("we are pressing a");
      this.viking.moveLeft();
    }
    if (keyIsDown(68)) {
      console.log("we are pressing d");
      this.viking.moveRight();
    }

  }


  reset(){
    
    this.viking.x = (Math.floor(Math.random() * 10))*100;
    this.viking.y = (Math.floor(Math.random() * 10))*100;

    this.treasure.x = (Math.floor(Math.random() * 10))*100;
    this.treasure.y = (Math.floor(Math.random() * 10))*100;

  }
}

// END OF CLASSES 















