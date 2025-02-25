
let shapes = []

function setup() {
  createCanvas(500,500)
  pixelDensity(1)
  frameRate(30)

  shapes.push(new Rotators(points = [
    createVector(0,250),
    createVector(250,0),
    createVector(500,250)
  ]))
  shapes.push(new Rotators(points = [
    createVector(0,150),
    createVector(350,0),
    createVector(500,150)
  ]))
  shapes.push(new Rotators(points = [
    createVector(40,150),
    createVector(350,0),
    createVector(500,150),
    createVector(200,150)
  ]))
  shapes.push(new Rotators(points = [
    createVector(0,50),
    createVector(50,0),
    createVector(80,20),
    createVector(75,50)
  ]))
  shapes.push(new Rotators(points = [
    createVector(0,10),
    createVector(10,0),
    createVector(20,10),
  ]))
  shapes.push(new Rotators(points = [
    createVector(0,20),
    createVector(60,30),
    createVector(25,0)
  ]))

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
  
  for (let shape of shapes){
    shape.draw()
  }
}

class Rotators {
  constructor(points){
    this.points = points
    this.speed = random(.25,3)
    this.start = random(0,6)
  }

  draw(){
    let f = wrap(this.start + frameCount*this.speed*.01,0,360)
    beginShape()
    for (let i = 0; i < this.points.length; i++){
      let x = this.points[i].x * cos(f) - this.points[i].y * sin(f)
      let y = this.points[i].y * cos(f) + this.points[i].x * sin(f)
      vertex(pivot.x + x,pivot.y + y)
    }
    endShape()
  }
}