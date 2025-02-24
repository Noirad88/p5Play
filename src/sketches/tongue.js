
function setup() {
  createCanvas(500,500)
  noiseDetail(2)
  stroke(255)
  strokeWeight(1)
  noFill()
  background(0)
}

function draw(){
  clear()
  background(0)
  let my = mouseY
  let size
  for (let i = 0; i < 360; i+= 0.1){
    size = lerp(100,.5,i/360)
    let cx = 250 + size * cos(radians(i))
    let cy = 250 + size * sin(radians(i))
    point(cx,cy)
  }

}