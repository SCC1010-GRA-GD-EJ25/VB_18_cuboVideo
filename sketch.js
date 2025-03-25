let video

function preload() {
  // put preload code here
  video = createVideo('./videos/video.mp4')
  video.hide()
}

function setup() {
  // put setup code here
  createCanvas(800,800, WEBGL)
}

function draw() {
  // put drawing code here
  background(255)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(video)
  torus(120,80,60,30)
}

function mousePressed() {
    video.loop()
}
