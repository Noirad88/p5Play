let center = 0
let xOff = 0
let pos = 0
let spd = 5
let bugsTotal = 0
let bugs = []
let mouseInside = false

function wrap(value, min, max) {
  const range = max - min + 1;
  return ((value - min) % range + range) % range + min;
}


function setup() {
  createCanvas(500,500)
  noiseDetail(2)
  stroke(255)
  strokeWeight(1)
  noFill()
  center = width/2
  pos = createVector(center,center)
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())
  bugs.push(new Bug())

}

function draw(){
  background(0)
  
  mouseInside = false
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    console.log("inside")
    mouseInside = true
  }

  for (let bug of bugs){
    bug.draw()
  }

}

class Bug{
  constructor(){
    this.xOff = 0 + bugsTotal
    this.pos = createVector(random(0,500),random(0,500))
    this.spd = 5
    bugsTotal += 1000
  }

  draw(){
    beginShape()

    let lookRange = map(noise(this.xOff),0,1,0,360)
    this.pos.x += this.spd * Math.cos(lookRange)
    this.pos.y += this.spd * Math.sin(lookRange)

    let newX = wrap(this.pos.x,0,width)
    let newY = wrap(this.pos.y,0,height)
    let frame = frameCount*.5 % 2

    console.log(frame)
    vertex(newX - 2,newY - 2 + (4*frame))
    vertex(newX,newY)
    vertex(newX + 2,newY - 2 + (4*frame))
    this.xOff += .001

    endShape()

  }
}