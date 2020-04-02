class Game {
    drawGrid() {
        // Iteration 1
        // Draw the grid
        // https://p5js.org/reference/#/p5/line
        for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
            for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
                line(x, 0, x, HEIGHT);
                line(0, y, WIDTH, y);
            }
        }
    }
}
