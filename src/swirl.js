let xOff = 0
let yOff = 1000
const swirlSpeed = .0025
const swirlSmoothness = .15
const swirlSize = 1000
let center = 0

function setup() {
  createCanvas(windowWidth,windowHeight)
  center = width/2
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function draw(){
  clear()
  stroke(220)
  strokeWeight(2)
  noFill()


  beginShape()
  let centerX = windowWidth/2
  let centerY = windowHeight/2
  let sSize = 2

  for (let i = 0; i < swirlSize; i+= sSize){
    let x = centerX + i * cos(i*swirlSmoothness + (-frameCount * swirlSpeed))
    let y = centerY + i * sin(i*swirlSmoothness + (-frameCount * swirlSpeed))
    // let noiseOffX = map(noise(xOff),0,1,0,5)
    // let noiseOffY = map(noise(yOff),0,1,0,5)
    // vertex(x + noiseOffX,y + noiseOffY)
    vertex(x,y)
    xOff += .2
    yOff += .2
  }


  endShape()
}