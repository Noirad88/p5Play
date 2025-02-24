
function setup() {
  createCanvas(500,500)
  pixelDensity(1)

  points = [
    createVector(0,250),
    createVector(250,0),
    createVector(500,250)
  ]

  pivot = createVector(250,250)
}

function wrap(number, min, max) {
  const range = max - min + 1;
  return (number - min) % range + min;
}

function draw(){
  background(0)
  stroke(255)
  strokeWeight(2)

  let f = wrap(frameCount*.01,0,360)
  beginShape()
  for (let i = 0; i < points.length; i++){
    let x = points[i].x * cos(f) - points[i].y * sin(f)
    let y = points[i].y * cos(f) - points[i].x * sin(f)
    vertex(pivot.x + x,pivot.y + y)
  }
  endShape()
}