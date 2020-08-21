class Player {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.image;
    }

    // preloadPlayer() {

    // }

    // setupPlayer() {

    // }

    drawPlayer() {
        image(this.image, this.col, this.row, 100, 100);
    }


    moveUp() {
        if(this.row > 99) {this.row -= 100};
        this.image = game.playerImgUp;
        }

    moveDown() {
           if(this.row < 900) {this.row += 100};
           this.image = game.playerImgDown;
            }
 
    moveLeft() {
        if(this.col > 99) {this.col -= 100};
        this.image = game.playerImgLeft;
    }


    moveRight() {
        if(this.col < 900) {this.col += 100};
        this.image = game.playerImgRight;
        }
}