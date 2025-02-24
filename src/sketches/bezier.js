
function setup() {
  createCanvas(500,500)
  pixelDensity(1)
  p0 = createVector(0,250)
  p1 = createVector(250,0)
  p2 = createVector(250,500)
  p3 = createVector(500,250)
  center = createVector(250,250)
}

function draw(){
  background(0)
  stroke(255)
  strokeWeight(2)

  let delta = 0.01

  for (let i = 0; i <= 1; i += delta){

    let newPoint = cubic(p0,p1,p2,p3,i)
    point(newPoint.x,newPoint.y)
  }

}

function quadratic(p0,p1,p2,t){
  let x = p0.x + (p1.x - p0.x) * t
  let y = p0.y + (p1.y - p0.y) * t

  let x2 = p1.x + (p2.x - p1.x) * t
  let y2 = p1.y + (p2.y - p1.y) * t

  let x3 = x + (x2 - x) * t
  let y3 = y + (y2 - y) * t

  return createVector(x3,y3)
}

function cubic(p0,p1,p2,p3,t){
  let newPoint = quadratic(p0,p1,p3,t)
  let newPoint2 = quadratic(p0,p2,p3,t)
  let x = newPoint.x + (newPoint2.x - newPoint.x) * t
  let y = newPoint.y + (newPoint2.y - newPoint.y) * t

  return createVector(x,y)

}

