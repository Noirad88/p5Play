
let snakes = []
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(30);
  strokeWeight(1);
  colorMode(RGB);
  for (let i = 0; i < 5; i++){
    snakes.push(new snake())
  }
}

function draw(){
  clear()
  for (let snake of snakes){
    snake.update()
    snake.display()
  }
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function mouseMoved(){
}

class snake {
  constructor(){
    this.radius = 50
    this.drawPosX = random(0,windowWidth)
    this.drawPosY = random(0,windowHeight)
  }

  update() {

  }

  display(){
    let cosX = this.drawPosX + this.radius * Math.cos(1)
    let cosY = this.drawPosY + this.radius * Math.sin(1)
    let circColor = frameCount % 100
    stroke(circColor,circColor,circColor)
    circle(cosX,cosY,circColor)
  }
}