let xOff = 0
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

  let distX = dist(250,250,mouseX,mouseY)

  for (let i = 0; i < 360; i++){
    let radius = map(noise(xOff),0,1,50,max(60,distX))
    let x = center + radius * cos(i)
    let y = center + radius * sin(i)
    point(x,y)
    xOff += 1
  }

  let distX2 = dist(350,350,mouseX,mouseY)

  for (let i = 0; i < 360; i++){
    let radius = map(noise(xOff),0,1,20,max(30,distX2))
    let x = (center+100) + radius * cos(i)
    let y = (center+100) + radius * sin(i)
    point(x,y)
    xOff += 1
  }

  let distX3 = dist(250,150,mouseX,mouseY)

  for (let i = 0; i < 360; i++){
    let radius = map(noise(xOff),0,1,20,max(30,distX3))
    let x = (center) + radius * cos(i)
    let y = (center-100) + radius * sin(i)
    point(x,y)
    xOff += 1
  }


}