class Treasure {
    constructor() {
        this.row = null;
        this.col = null;
    }

    setRandomPosition() {
        this.row = Math.floor(Math.random() * 10);
        this.col = Math.floor(Math.random() * 10);
    }

    draw(img) {
        // Write the draw method in the Player class that should display the player on the canvas, based on its col and row.
        image(img, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);



    }
}