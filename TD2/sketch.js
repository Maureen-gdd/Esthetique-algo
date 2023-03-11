const WIDTH = 600;
const LINE = 12;
//exo1
const colours = ["#c83e4d", "#F4B860", "#26547C", "#E49AB0", "#9ABCA7", "#B4A0E5"];
//exo2
//const colours = ["#c83e4d", "#F4B860", "#26547C", "#E49AB0", "#E49AB0", "#E49AB0"];
//exo3
//const colours = ["#c83e4d", "#c83e4d", "#F4B860", "#F4B860", "#26547C", "#E49AB0", "#E49AB0", "#E49AB0"];

function setup() 
{
  createCanvas(800, 800);
  w_square = WIDTH / LINE;
  background(20);
  translate(100, 100);
  stroke("white");
  for(let i = 0; i < LINE; i++)
    createLine(w_square * i, w_square);
}

function createLine(ordinate, w_square) 
{
  for (let n_square = 0; n_square < LINE; n_square++)
  {
    fill(random(colours));
    rect(n_square * w_square, ordinate, w_square, w_square);
  }
}

function draw() 
{

}
