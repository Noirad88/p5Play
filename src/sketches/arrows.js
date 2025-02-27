let arrowTemplate = [
]

function setup() {
  createCanvas(500,500)
  pixelDensity(2)
  frameRate(30)
  arrowTemplate = [
    createVector(-5,0),
    createVector(0,20),
    createVector(5,0),
    createVector(0,5),
    createVector(-5,0)
  ]

  center = createVector(250,250)
}

function rotatePoint(p_x,p_y,p_angle){
  let x = p_x * cos(p_angle) - p_y * sin(p_angle)
  let y = p_y * cos(p_angle) + p_x * sin(p_angle)

  return createVector(x,y)
}

function wrap(number, min, max) {
  const range = max - min + 1;
  return (number - min) % range + min;
}

function draw(){
  background(0)
  stroke(255)
  strokeWeight(1)
  noFill()

  let angX = mouseY - center.y
  let angY = mouseX - center.x
  let ang = atan2(angY,angX)*-1

  for (let x = 0; x < 520; x+=20){
    for (let y = 0; y < 520; y+=20){
      let colorScroll = frameCount * 0.05
      let color = cos(colorScroll + x+ y* 0.025) * 100
      stroke(color)
      drawArrow(x,y,ang)
    }
  }
}

function drawArrow(px,py,ang){
  beginShape()
  for (let point of arrowTemplate){
    let newP = rotatePoint(point.x,point.y,ang)
    vertex(newP.x + px,newP.y + py)
  }
  endShape()
}
