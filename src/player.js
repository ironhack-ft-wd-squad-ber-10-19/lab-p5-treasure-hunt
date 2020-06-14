class Player {
    
    constructor(name, col, row) {
        this.name = name;
        this.col = col;
        this.row = row;
        this.image;
        this.score = 0;
    }
    
    moveUp() {
        this.row -= SQUARE_SIDE;
        this.image = characterUpImg;
    }

    moveDown() {
        this.row += SQUARE_SIDE;
        this.image = characterDownImg;
    }

    moveRight() {
        this.col += SQUARE_SIDE;
        this.image = characterRightImg;
    }

    moveLeft() {
        this.col -= SQUARE_SIDE;
        this.image = characterLeftImg;
    }

    getTreasure() {
        this.score += 100;
        game.treasure.setRandomPosition();
        game.treasure.draw();
        console.log(`Score of ${this.name}: ${this.score}`);
    }

    draw() {
        image(this.image || characterDownImg, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
        if (this.col === game.treasure.col && this.row === game.treasure.row) {
            this.getTreasure();
        }
    }

}