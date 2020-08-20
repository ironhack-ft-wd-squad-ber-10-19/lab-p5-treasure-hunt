class Player {
    constructor(row, col){
        this.row = row;
        this.col = col;
    }
    moveUp(){
        console.log('moveUp');
        this.row -= 1; 
    }
    moveDown(){
        console.log('moveDown');
        this.row += 1;
    }
    moveLeft(){
        console.log('moveLeft');
        this.col -= 1;
    }
    moveRight(){
        console.log('moveRight');
        this.col += 1;
    }

    draw(img){
        // Write the draw method in the Player class that should display the player on the canvas, based on its col and row.
        image(img, this.row*SQUARE_SIDE, this.col*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);

        

    }
}

