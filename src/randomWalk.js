let x = 0
let y = 0
const walklength = 10000

function setup() {
  createCanvas(500,500)
  pixelDensity(1)
  x = width/2
  y = height/2
  background(0)
}

function draw(){
  stroke(255)
  strokeWeight(2)
  for (let p = 0; p < walklength; p++){
  point(x,y)

  let r = floor(random(4))

  switch (r){
    case 0:
      x = x + 1
      break
    case 1:
      x = x -1
      break
    case 2:
      y = y + 1
      break
    case 3:
      y = y - 1
      break
  }
}

noLoop()
}


