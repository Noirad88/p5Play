let totalExpanders = 16
let occupiedSpaces = []
let expanderContainer = []
let expanderQueue = []
const gridSize = 1

function setup() {
  createCanvas(100,100)
  pixelDensity(1)
  background(0)
  stroke(255)
  strokeWeight(4)

  let expanderColors = [
    color(255, 204, 0),
    color(110, 255, 0),
    color(255, 56, 200),
    color(56, 255, 125),
    color(100,5, 125)
  ]

  for (let i = 0; i < totalExpanders; i++){
  expanderContainer.push(new Expander(round(random(0,width - gridSize)),round(random(0,height - gridSize)),expanderColors[i % expanderColors.length]))
  }
}

function draw(){
  expanderContainer = expanderContainer.concat(expanderQueue)
  expanderQueue.length = 0

  let markedExpanders = expanderContainer.filter((expander) => expander.isAlive == true)
  expanderContainer = markedExpanders

  for (let expander of expanderContainer){
    expander.update()
    expander.draw()
  }
}

function isSpaceFree(result,pos){
  if (result == undefined){
    if (pos.x < 0) return false
    if (pos.x >= width) return false
    if (pos.y < 0) return false
    if (pos.y >= height) return false
    return true
  }
  return false
}

class Expander {
  constructor(x,y,newColor){
    console.log("created")
    this.pos = createVector(x,y)
    occupiedSpaces.push([this.pos.x,this.pos.y])
    this.isAlive = true
    this.neighborStates = [0,1,2,3]
    this.myColor = newColor
  }

  update(){
    let randMove = floor(random(0,4))
    let lmovepos = createVector(this.pos.x - gridSize,this.pos.y )
    let tmovepos = createVector(this.pos.x,this.pos.y - gridSize)
    let rmovepos = createVector(this.pos.x + gridSize,this.pos.y)
    let bmovepos = createVector(this.pos.x,this.pos.y + gridSize)

    let lmove = occupiedSpaces.find((pos) => pos[0] == lmovepos.x && pos[1] == lmovepos.y)
    let tmove = occupiedSpaces.find((pos) => pos[0] == tmovepos.x && pos[1] == tmovepos.y)
    let rmove = occupiedSpaces.find((pos) => pos[0] == rmovepos.x && pos[1] == rmovepos.y)
    let bmove = occupiedSpaces.find((pos) => pos[0] == bmovepos.x && pos[1] == bmovepos.y)

    if (randMove == 0 && isSpaceFree(lmove,lmovepos)){
      console.log('left free!')
      expanderQueue.push(new Expander(lmovepos.x,lmovepos.y,this.myColor))
      this.neighborStates.pop()
    }
    else{
      stroke(255,0,255)
    }


    if (randMove == 1 && isSpaceFree(tmove,tmovepos)){
      console.log('top free!')
      expanderQueue.push(new Expander(tmovepos.x,tmovepos.y,this.myColor))
      this.neighborStates.pop()
    }
    else{
      stroke(0,0,255)
    }

    if (randMove == 2 && isSpaceFree(rmove,rmovepos)){
      console.log('right free!')
      expanderQueue.push(new Expander(rmovepos.x,rmovepos.y,this.myColor))
      this.neighborStates.pop()
    }
    else{
      stroke(0,0,255)
    }


    if (randMove == 3 && isSpaceFree(bmove,bmovepos)){
      console.log('bottom free!')
      expanderQueue.push(new Expander(bmovepos.x,bmovepos.y,this.myColor))
      this.neighborStates.pop()
    }
    else{
      stroke(0,0,255)
    }

    if (this.neighborStates.length == 0){
      this.isAlive = false
    }
  }

  draw(){
    console.log('draw')
    stroke(this.myColor)
    point(this.pos.x,this.pos.y) 
  }

}


