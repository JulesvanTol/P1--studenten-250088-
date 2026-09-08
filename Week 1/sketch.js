function setup() {
  createCanvas(800, 800);

}

function draw() {
  
  background(220);
  //mannetje
  /*
  fill(255);
  rect(350, 150, 100, 400);
circle(400, 200, 200);
line(350, 550, 350, 750);
line(450, 550, 450, 750);
circle(360, 200, 50);
circle(430, 200, 50);
fill(0);
circle(360, 200, 30);
circle(430, 200, 30);
*/

//mondriaan
strokeWeight(4);
fill (255);
rect(100, 200, 600, 400);

// horizontal lines
line(120, 250, 700, 250); //H1
line(100, 400, 700, 400); //H2
line(100, 430, 700, 430); //H3
line(100, 530, 700, 530); //H4

//vertical lines
line(120, 200, 120, 600); //V1
line(450, 200, 450, 600); //V2
line(550, 200, 550, 600); //V3

//rectangles
fill(255,255,0);
rect(450, 530, 100, 70);
rect(150, 250, 300, 180);

fill(0,0,255);
rect(100, 430, 120, 170);
rect(550,530, 150, 70);
rect(450, 200, 50, 50);

fill(0);
rect(550, 400, 150, 30);
rect(100, 200, 20, 200);

fill(255,0,0);
rect(120, 400, 30, 30);
rect(500, 200, 200, 200);
//stoplight
/*
fill(40);
rect(550, 150, 150, 450);
rect(600, 600, 50, 5000);
fill(255, 0, 0);
circle(625, 250, 80);
fill(255, 150, 0);
circle(625, 375, 80);
fill(0, 255, 0);
circle(625, 500, 80);
*/
}
