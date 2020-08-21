class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.image;
    }

    setupPlayer() {
    }
    
    moveUp() {
        
        if (this.row > 0) {
            this.row -= 100;
            this.image = loadImage("assets/character-up.png")
    }
    }
    
    moveDown() {
        if (this.row < 900) {
        this.row += 100;
        this.image = loadImage("assets/character-down.png");
        }
    }

    moveLeft() {
        if (this.col > 0) {
        this.col -= 100;
        this.image = loadImage("assets/character-left.png")
        }
    }

    moveRight() {
        if (this.col < 900) {
        this.col += 100;
        this.image = loadImage("assets/character-right.png")
        }
    }



    drawPlayer() {
        image(this.image, this.col, this.row, 100, 100);
    }

    // keepScore() {
    //     let score = 0
    // if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
    //   score += 1
    //   console.log(`Your score is ${score}`)
    // }
    // }

    
}