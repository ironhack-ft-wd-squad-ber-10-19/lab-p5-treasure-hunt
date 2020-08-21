class Game {
	drawGrid() {
		// Iteration 1
		// Draw the grid
		// https://p5js.org/reference/#/p5/line

		for (let grid = 0; grid <= 1000; grid += 100) {
			line(0, grid, 1000, grid)
			line(grid, 0, grid, 1000)
		}
	}
	preloadGame() {
		this.treasureImage = loadImage("/assets/treasure.png")
		this.playerImage = loadImage("/assets/character-down.png")
	}

	setupGame() {
		this.treasure = new Treasure(500, 500)
		this.treasure.setRandomPosition()
		this.treasure.image = this.treasureImage
		this.player = new Player(0, 0)
		this.player.image = this.playerImage
	}

	drawGame() {
		this.treasure.drawTreasure()
		this.player.drawPlayer()
		if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
			this.treasure.setRandomPosition()
		}
	}
}
