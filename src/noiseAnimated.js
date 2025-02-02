
function setup() {
  createCanvas(200,200)
  background(52)
  pixelDensity(1)
  noiseDetail(8)
}

function draw(){

  let noiseLevel = 255
  let noiseScale = 0.009

  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++){
      let nx = noiseScale * x
      let ny = noiseScale * y
      let nt = noiseScale * frameCount
      let c = noiseLevel * noise(nx,ny,nt)

      stroke(c)
      point(x,y)
    }
  }
}

