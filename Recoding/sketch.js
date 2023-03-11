let xoff = 0.0;

function setup() 
{
  // width, height
  createCanvas(700, 700);
  background(255, 204, 0);
}

function draw() 
{
  let y = 100;
  for(let i = 0; i < 80; i++)
  {
    line(width/10, y, 9*width/10, y);
    y+=5;
  }
  /*xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  //line(x1, y1, x2, y2)
  line(0, n, width, n);
  describe(`vertical line moves left to right with updating
    noise values.`);*/
}
