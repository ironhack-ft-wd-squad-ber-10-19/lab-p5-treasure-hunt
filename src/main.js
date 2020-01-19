let octahedron;
let carTexture;

function preload() {
  car = loadModel('assets/car.obj', false);
  carTexture = loadImage('assets/Futuristic_Car_C.jpg');
}

function setup() {
  createCanvas(1024, 768, WEBGL);
}

function draw() {
  background(200);
  scale(100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(radians(180));
  // rotateZ(frameCount * 0.01);
  normalMaterial(); // For effect
  texture(carTexture);
  model(car);
}
