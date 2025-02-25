let center = 0
let circleLines = []
let circleCount = 255

function setup() {
  createCanvas(500,500)
  center = width/2

  circleLines.push(new CircleLine(45,340))
  circleLines.push(new CircleLine(45,320))
  circleLines.push(new CircleLine(45,300))
  circleLines.push(new CircleLine(45,280))
  circleLines.push(new CircleLine(45,260))
  circleLines.push(new CircleLine(45,240))
  circleLines.push(new CircleLine(45,220))
  circleLines.push(new CircleLine(45,200))
  circleLines.push(new CircleLine(45,180))
  circleLines.push(new CircleLine(45,160))
  circleLines.push(new CircleLine(45,140))
  circleLines.push(new CircleLine(45,120))
  circleLines.push(new CircleLine(45,100))
  circleLines.push(new CircleLine(45,80))
  circleLines.push(new CircleLine(45,60))
  circleLines.push(new CircleLine(45,40))
  circleLines.push(new CircleLine(45,20))
}

function draw(){
  clear()
  background(0)
  strokeWeight(1)
  noFill()

  for (let circle of circleLines){
    circle.draw()
  }

}

class CircleLine {
  constructor(p_angle,p_radius){
    this.angle = random(15,90)
    this.radius = p_radius
    this.speed = random(0,2)
    this.start = random(0,360)
    this.color = circleCount
    circleCount -= 20
  }

  draw(){
    let f = (this.start + frameCount) * this.speed * 0.25
    stroke(this.color)

    beginShape()
    for (let i = 0 + f; i < this.radius + f; i++){
      let x = center + this.radius * cos(radians(i))
      let y = center + this.radius * sin(radians(i))
      vertex(x,y)
    }
    endShape()
  }
}