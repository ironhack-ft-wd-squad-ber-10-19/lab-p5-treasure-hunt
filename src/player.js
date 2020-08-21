class Player {
    constructor(){
        this.col = 0; 
        this.row = 0;
        this.image;
    }

    moveUp(){
        this.row -= 100;
        this.image = loadImage('/assets/character-up.png');
    }

    moveDown() {
        this.row += 100;
        this.image = loadImage('/assets/character-down.png');
    }
        
    moveLeft(){
        this.col -= 100;
        this.image = loadImage('/assets/character-left.png');
    }

    moveRight() {    
        this.col += 100;
        this.image = loadImage('/assets/character-right.png');
    } 

    drawPlayer(){
        image(this.image, this.col, this.row, 100, 100)
    }
}