class Player {
    constructor(){
        this.col = 0; 
        this.row = 0;
        this.image;
    }
        
        moveUp(){
            this.col -= 100;
            this.image = loadImage("/assets/character-up.png")
         }
       
        moveDown() {
            this.col += 100;
            this.image = loadImage("/assets/character-down.png");
          
        }
        moveLeft(){
            this.row -= 100;
            this.image = loadImage("/assets/character-left.png");
        }
        
        moveRight() {    
            this.row += 100;
            this.image = loadImage("/assets/character-right.png");
        } 

        draw(){
            console.log("game preload");
image(this.image, this.row, this.col, 100, 100)
        }
      
    }
        