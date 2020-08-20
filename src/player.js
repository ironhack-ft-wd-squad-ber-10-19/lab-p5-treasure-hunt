class Player {
    constructor(){
        this.col = 0; 
        this.row = 0;
        this.image;
    }
        
        moveUp(){
            this.colcol -= 1;
         }
       
        moveDown() {
            this.col += 1;

        }
        moveLeft(){
            this.row -= 1;
        }
        
        moveRight() {    
            this.row += 1;
        } 

        draw(){
            console.log("game preload");
image(this.image, 0,0, 100,100)
            }
    }
