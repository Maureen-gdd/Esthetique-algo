
/* ********** CONSTANT ********** */
// height of the variation in the middle
let h_var = 40;
// width of the variation in the middle
let w_var = 8e6;
// more or less wave, higher number = less wave
let wave = 20;
let noiseScale = 0.2;

/* ********** VARIABLES ********** */
// variable of the canvas
let cnv;
let sound;

function preload() 
{
  sound = loadSound('disorder.mp3');
}

function centerCanvas() 
{
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() 
{
  centerCanvas();
}

function togglePlay() 
{
  if(sound.isPlaying())
    sound.pause();
  else
    sound.loop();
}

function setup()
{
  cnv = createCanvas(a=windowWidth*0.8, b=windowHeight*0.9)
  background(0);
  centerCanvas();
  let v=vertex;
  // to not fill the vertex and have line
  fill(0);
  // colour white
  stroke(b) ;
  for(y = height*0.2; y < height-height*0.1; y+=5) 
  {
    beginShape()
    for(x = width*0.35; x < width-width*0.35; ++x)
      v(x,y-(h_var/(1+pow(x-a/2,4)/w_var))*noise(x/wave, y))
    endShape()
  }

  cnv.mouseClicked(togglePlay);
}