let c1, c2;
function setup() 
{
  createCanvas(windowWidth, windowHeight);

  // Create a color
  // one 255 = 255, 255, 255
  c1 = color(255);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++)
  {
    // convertir des valeurs. y qui se trouve entre 0 et hauteur devient une valeur entre 0 et 1
    n = map(y,0,height,0,1);
    //Blends two colors to find a third color somewhere between them.
    //amt parameter is the amount to interpolate between the two values
    //where 0.0 is equal to the first color, 0.1 is very near the first color, 0.5 is halfway in...
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function draw() 
{
  // To create an ellipse. x, y, w, h
  ellipse(150, 120, 120, 55);
}
