class Treasure {
    constructor(col, row) {
        this.setRandomPosition();
    }

    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10) * SIDE;
        this.row = Math.floor(Math.random() * 10) * SIDE;
    }

    drawTreasure() {
        image(imgTreasure, this.col, this.row, SIDE, SIDE);
    }

    increaseScore() {
        player1.score;
        document.body.querySelector("#score").innerText = player1.score;
    }

    treasureCheck() {
        if (player1.col === treasure.col && player1.row === treasure.row) {
            treasure.setRandomPosition();
            player1.score += 1;
            console.log("Score Player1: " + player1.score);
            this.increaseScore();
        }
    }


}