let circleLines = []

function wrapFloatClamp(value, p_min, p_max) {
  return max(p_min, min(value, p_max));
}

function setup() {
  createCanvas(500,500)
  center = width/2

  circleLines.push(new CircleLine(createVector(0,0)))
  circleLines.push(new CircleLine(createVector(20,0)))
  circleLines.push(new CircleLine(createVector(40,0)))
  circleLines.push(new CircleLine(createVector(60,0)))

  circleLines.push(new CircleLine(createVector(0,20)))
  circleLines.push(new CircleLine(createVector(0,40)))
  circleLines.push(new CircleLine(createVector(0,60)))
}

function draw(){
  clear()
  background(0)
  strokeWeight(2)
  noFill()
  stroke(255)

  for (let circle of circleLines){
    circle.draw()
  }

}

class CircleLine {
  constructor(p_start){
    this.start = p_start
    this.xOff = 0
    this.xOff2 = 1000
    this.lines = [
      createVector(0,0),
      createVector(0,250),
      createVector(425,250),
      createVector(500,500),
    ]
    // this.createLinePoints()
    this.time = 0
    this.speed = 0.01
    this.lineLength = .2
    this.detail = 0.01

  }

  createLinePoints(){
    this.lines = [
      createVector(0,0),
      createVector(250,250),
      createVector(425,425),
      createVector(500,500),
    ]

    let p1x = map(noise(this.xOff),0,1,0,200)
    let p2x = map(noise(this.xOff2),0,1,0,200)
    let p1y = map(noise(this.xOff2),0,1,0,200)
    let p2y = map(noise(this.xOff),0,1,0,200)

    this.lines[1].x += p1x
    this.lines[2].x += p2x
    this.lines[1].y += p1y
    this.lines[2].y += p2y
    this.xOff += 1
    this.xOff2 += 1

  }

  draw(){
    let max = wrapFloatClamp(this.time,0,1 + this.lineLength)

    beginShape()

    for (let i = max - this.lineLength; i <= max; i += this.detail){
      let q = cubic(this.lines[0],this.lines[1],this.lines[2],this.lines[3],i)
      vertex(this.start.x + q.x,this.start.y + q.y)
    }

    endShape()

    this.time += this.speed
    if (this.time > 1 + this.lineLength){
      this.time = 0
      // this.createLinePoints()
    }
  }
}