function setup() {
  createCanvas(800, 600);
}

//Variable collection

let movement_train = -100;

let shinesize = 1;
let shinesize2 = 1;
let shinesize3 = 1;
let trainSpeed = 1;

function draw() {

  //------------------------------------------------------------------------

  //Sky
  background(130, 100, 180);
  strokeWeight(0)
  fill(150, 110, 160);
  circle(400, 1050, 2000);
  fill(180, 120, 150);
  circle(400, 1100, 2000);
  fill(220, 150, 160);
  circle(400, 1150, 2000);

  //------------------------------------------------------------------------

  //sun

  fill(235, 165, 100);
  circle(200, 200, shinesize);

  shinesize = shinesize * sin(1 + frameCount * 0.02) * 0.2 + 120;

  fill(255, 215, 100);
  circle(200, 200, shinesize2);

  shinesize2 = shinesize2 * sin( 1.3 + frameCount * 0.02) * 0.2 + 100;

  fill(255, 255, 200);
  circle(200, 200, shinesize3);

  shinesize3 = shinesize3 * sin(1.6 + frameCount * 0.02) * 0.2 + 80;

  //------------------------------------------------------------------------


  //Mountains
  fill(80);
  triangle(0, 600, 0, 200, 600, 600);
  triangle(800, 600, 800, 100, 370, 600);
  triangle(0, 400, 550, 160, 1300, 400);
  rect(0, 400, 800, 200);

  fill(60);
  triangle(0, 450, 250, 200, 800, 550);
  triangle(0, 500, 680, 270, 1800, 600);
  triangle(-500, 500, 200, 340, 200, 500);
  rect(0, 400, 800, 200);

  //------------------------------------------------------------------------

  //Moving Test

  fill(0);

  movement_train = movement_train + trainSpeed;

  trainSpeed = trainSpeed + 0.02

  if (trainSpeed >= 8) {
    trainSpeed = 8
  };

  if (movement_train > 1000) {
    movement_train = -100
  };

  circle(movement_train + 15, 490, 20);
  circle(movement_train - 10, 490, 20);
  circle(movement_train - 70, 490, 20);
  circle(movement_train - 95, 490, 20);
  circle(movement_train - 120, 490, 20);
  rect(movement_train - 130, 440, 150, 50);
  ellipse(movement_train + 20, 465, 20, 50);
  rect(movement_train - 20, 420, 15, 25);
  rect(movement_train - 130, 420, 60, 50);
  rect(movement_train - 135, 480, 170, 10);
  rect(movement_train - 150, 475, 30, 8);

  //------------------------------------------------------------------------

  //bridge

  fill(0);

  rect(0, 500, 800, 15);

  rect(10, 497, 10, 200);
  rect(60, 497, 10, 200);
  rect(110, 497, 10, 200);
  rect(160, 497, 10, 200);
  rect(210, 497, 10, 200);
  rect(260, 497, 10, 200);
  rect(310, 497, 10, 200);
  rect(360, 497, 10, 200);
  rect(410, 497, 10, 200);
  rect(460, 497, 10, 200);
  rect(510, 497, 10, 200);
  rect(560, 497, 10, 200);
  rect(610, 497, 10, 200);
  rect(660, 497, 10, 200);
  rect(710, 497, 10, 200);
  rect(760, 497, 10, 200);
  rect(810, 497, 10, 200);
  
  rect(35, 497, 10, 5);
  rect(85, 497, 10, 5);
  rect(135, 497, 10, 5);
  rect(185, 497, 10, 5);
  rect(235, 497, 10, 5);
  rect(285, 497, 10, 5);
  rect(335, 497, 10, 5);
  rect(385, 497, 10, 5);
  rect(435, 497, 10, 5);
  rect(485, 497, 10, 5);
  rect(535, 497, 10, 5);
  rect(585, 497, 10, 5);
  rect(635, 497, 10, 5);
  rect(685, 497, 10, 5);
  rect(735, 497, 10, 5);
  rect(785, 497, 10, 5);
  rect(835, 497, 10, 5);


}
