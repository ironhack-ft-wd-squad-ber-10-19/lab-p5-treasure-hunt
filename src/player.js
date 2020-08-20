class Player {
    constructor(row, col){
        this.row = row;
        this.col = col;
    }
    moveUp(){
        console.log('moveUp');
        if (this.col > 0){
            this.col -= 1; 
        }
    }
    moveDown(){
        console.log('moveDown');
        if (this.col < 9){
            this.col += 1; 
        }
    }
    moveLeft(){
        console.log('moveLeft');
        if (this.row > 0){
            this.row -= 1; 
        }
    }
    moveRight(){
        console.log('moveRight');
        if (this.row < 9){
            this.row += 1; 
        }
    }

    draw(img){
        // Write the draw method in the Player class that should display the player on the canvas, based on its col and row.
        image(img, this.row*SQUARE_SIDE, this.col*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);

        

    }
}

