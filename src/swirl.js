let xOff = 0
let yOff = 1000
const swirlSpeed = .05
const swirlSmoothness = .15
const swirlSize = 500
let center = 0

function setup() {
  createCanvas(500,500)
  center = width/2
}

function draw(){
  clear()
  background(0)
  stroke(255)
  strokeWeight(1)
  noFill()


  beginShape()

  for (let i = 0; i < swirlSize; i++){
    let x = center + i * cos(i*swirlSmoothness + (-frameCount * swirlSpeed))
    let y = center + i * sin(i*swirlSmoothness + (-frameCount * swirlSpeed))
    // let noiseOffX = map(noise(xOff),0,1,0,5)
    // let noiseOffY = map(noise(yOff),0,1,0,5)
    // vertex(x + noiseOffX,y + noiseOffY)
    vertex(x,y)
    xOff += .2
    yOff += .2
  }


  endShape()
  beginShape()

  for (let i = 0; i < swirlSize; i++){
    let x = center - i * cos(i*swirlSmoothness + (-frameCount * swirlSpeed))
    let y = center - i * sin(i*swirlSmoothness + (-frameCount * swirlSpeed))
    // let noiseOffX = map(noise(xOff),0,1,0,5)
    // let noiseOffY = map(noise(yOff),0,1,0,5)
    // vertex(x + noiseOffX,y + noiseOffY)
    vertex(x,y)
  }

  endShape()
}