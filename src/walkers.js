let vec
const walklength = 10000
let walkers = []
function setup() {
  createCanvas(500,500)
  pixelDensity(1)
  background(0)

  walkers.push(new Walker(width/2,height/2))
  walkers.push(new Walker(width/2,height/2))
  walkers.push(new Walker(width/2,height/2))
  walkers.push(new Walker(width/2,height/2))
}

function draw(){
  stroke(255)
  strokeWeight(2)

  for (let walker of walkers){
    walker.pos = createVector(width/2,height/2)
    for (let i = 0; i < walker.walklength; i++){
      walker.update()
      walker.draw()
    }
  }
  noLoop()
}

function mouseClicked(){
  background(0)
  redraw()
}

class Walker {
  constructor(x,y){
    this.walklength = 10000
    this.pos = createVector(x,y)
  }

  update(){
    this.pos.x = this.pos.x + random(-1,1)
    this.pos.y = this.pos.y + random(-1,1)
  }

  draw(){
    point(this.pos.x,this.pos.y)
  }
}


