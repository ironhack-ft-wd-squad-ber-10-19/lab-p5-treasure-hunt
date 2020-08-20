class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
    }
    preloadPlayer() {
        this.image = loadImage("assets/character-down.png")
    }

    setupPlayer() {
    }
    
    moveUp() {
        this.row -= 100;
    }
    
    moveDown() {
        this.row += 100;
    }

    moveLeft() {
        this.col -= 100;
    }

    moveRight() {
        this.col += 100;
    }

    drawPlayer() {
        
        image(this.image, this.col, this.row, 100, 100)
    }

    
}