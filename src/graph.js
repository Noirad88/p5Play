let xOff2 = 1000

function setup() {
    resizeCanvas(windowWidth,windowHeight)
}

function draw(){
    background(75)
    stroke(255)
    noFill()
    beginShape()
    let xOff = 0

    for (let i = 0; i < windowWidth; i++){
        stroke(255)
        let y = noise(xOff) * windowHeight
        let y2 = noise(xOff2) * 10
        vertex(i,y)
        xOff += 0.01
    }

    endShape()
}