let cnv;

function centerCanvas() 
{
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() 
{
  // width, height
  cnv = createCanvas(windowWidth*0.8, windowHeight*0.9);
  centerCanvas();
  background(0, 0, 0);
}

function draw() 
{
  let y = 100;
  for(let i = 0; i < 80; i++)
  {
    stroke(255,255,255);
    line(width*0.35, y, width - width*0.35, y);
    y+=6;
  }
  /*xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  //line(x1, y1, x2, y2)
  line(0, n, width, n);
  describe(`vertical line moves left to right with updating
    noise values.`);*/
}

function windowResized() 
{
  centerCanvas();
}
