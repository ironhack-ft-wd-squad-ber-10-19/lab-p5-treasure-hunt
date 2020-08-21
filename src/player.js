class Player {
    constructor() {
        this.row = 0;
        this.column = 0;
        this.image;
    }
    moveUp() {
        this.row++
    } 
    moveDown() {
        this.row--
    }
    moveLeft() {
        this.column--
    }
    moveRight() {
        this.column++
    }
    draw() {
        if (keyIsDown(38)) {
            this.column -= 100;
        } else if (keyIsDown(40)){
            this.column += 100;
        } else if (keyIsDown(37)){
            this.row -= 100;
        }else if (keyIsDown(39)){
            this.row += 100;
        }
        image(this.image, this.row, this.column, 100, 100);
    }
}