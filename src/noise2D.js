
function setup() {
  background(52)
  pixelDensity(1)
  resizeCanvas(windowWidth,windowHeight)
}

let inc = 0.001

function draw(){
  background(75)
  stroke(0)
  noFill()
  var yOff = 0
  loadPixels()
  
  for (let y = 0; y < windowHeight; y++){
    let xOff = 0
    for (let x = 0; x < windowWidth; x++){
      let index = (x + y * windowWidth) * 4
      var r = noise(xOff,yOff) * 255
      pixels[index + 0] = r
      pixels[index + 1] = r
      pixels[index + 2] = r
      pixels[index + 3] = 255
      xOff += inc
    }
    yOff += inc
  }

  updatePixels()

  

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

