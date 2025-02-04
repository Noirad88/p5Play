let blipContainer = []
let blipCount = 0

function setup() {
  resizeCanvas(windowWidth,windowHeight)
  for (let i = 0; i < 10; i++){
    blipContainer.push(new noiseBlip())
  }
}

function draw(){
  clear()
  stroke(0,0,0)
  strokeWeight(4)
  fill(0,0,0,0)

  for (let noiseBlip of blipContainer){
    noiseBlip.draw()
  }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

class noiseBlip{
  constructor(){
    this.xOff = 0 + blipCount * 5000 + random(1000)
    this.xOff2 = 10000 + blipCount * 5000 + random(1000)
    this.xOff3 = 1000 + blipCount * 5000 + random(1000)
    this.xVel = 0.001

    blipCount += 1
  }

  draw(){
    let newX = map(noise(this.xOff),0,1,0,windowWidth)
    let newY = map(noise(this.xOff2),0,1,0,windowHeight)

    this.radius = map(noise(this.xOff3),0,1,25,50)
    circle(newX,newY,this.radius)
    this.xOff += this.xVel
    this.xOff2 += this.xVel
    this.xOff3 += 0.01
  }
}
