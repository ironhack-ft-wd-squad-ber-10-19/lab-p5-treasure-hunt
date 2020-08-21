class Treasure {
	constructor(col, row) {
		this.col = col
		this.row = row
		this.image
	}

	preloadTreasure() {
		this.image = loadImage("/assets/treasure.png")
	}

	setRandomPosition() {
		this.row = Math.floor(Math.random() * 10) * SQUARE_SIDE
		this.col = Math.floor(Math.random() * 10) * SQUARE_SIDE
	}

	drawTreasure() {
		image(this.image, this.col, this.row, 100, 100)
	}
}
