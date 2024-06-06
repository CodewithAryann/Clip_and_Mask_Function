let img;

function preload() {
  img = loadImage("pic.jpg");
}

function setup() {
  createCanvas(800, 500); // Increase canvas size
  background(240); // Change background color to darker gray
  
  // Design 1: Image inside a circle
  let circleSize = 200;
  let circleX = width / 4 - circleSize / 2;
  let circleY = height / 2 - circleSize / 2;
  let cnv7 = createGraphics(circleSize, circleSize); // creating a sub-canvas for the circle
  cnv7.background(240); // Light gray background for the circle canvas
  cnv7.circle(circleSize / 2, circleSize / 2, circleSize - 10);
  cnv7.canvas.getContext("2d").clip();
  img.resize(circleSize, circleSize);
  cnv7.image(img, 0, 0);
  image(cnv7, circleX, circleY); // Adjusted position for the circle image
  
  // Design 2: Image inside a star
  let starSize = 150;
  let starX = 3 * width / 4 - starSize / 2;
  let starY = height / 2 - starSize / 2;
  let cnv1 = createGraphics(starSize, starSize); // Creating a sub-canvas for the star
  cnv1.background(240); // Light gray background for the star canvas
  drawStar(cnv1, starSize / 2, starSize / 2, 40, 75, 5);
  cnv1.strokeWeight(2);
  cnv1.stroke(200);
  cnv1.fill(255);
  let starMask = createGraphics(starSize, starSize); // Create a mask canvas
  drawStar(starMask, starSize / 2, starSize / 2, 40, 75, 5);
  img.mask(starMask);
  cnv1.image(img, 0, 0, cnv1.width, cnv1.height);
  image(cnv1, starX, starY); // Adjusted position for the star image

}

// Function to draw a star
function drawStar(g, x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  g.beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    g.vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    g.vertex(sx, sy);
  }
  g.endShape(CLOSE);
}
