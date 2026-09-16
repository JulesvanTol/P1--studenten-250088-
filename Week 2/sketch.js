function setup() {
  createCanvas(800, 600);
}

//Variable collection

let movement_train = -100;
let movement_Strain = 400;

let shinesize = 1;
let shinesize2 = 1;
let shinesize3 = 1;
let trainSpeed = 1;
let trainSSpeed = 1;
let redLight = false
let orangeLight = false
let greenLight = true
let trainGo = true
let trainSlow = false
let trainNo = false

//------------------------------------------------------------------------

//stoplight controls

function keyPressed() {
  if (keyCode === 32) {
    counter = 0
  };

  if (keyCode === 13 && redLight == true) {
    redLight = false; greenLight = true;
  }

  else if (keyCode === 13 && greenLight == true) {
    greenLight = false; orangeLight = true;
  }

  else if (keyCode === 13 && orangeLight == true) {
    orangeLight = false; redLight = true;
  }

}

//------------------------------------------------------------------------

function draw() {

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

  //mouse test

  /*fill(255);

  text(mouseX, 20, 20);
  text(mouseY, 20, 40);*/

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


  //Mountains and trees

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

  //stoplight display (and train speed affect)

  fill(0);
  rect(625, 415, 20, 60, 8);
  rect(632, 415, 6, 100);

  if(redLight == true) {
    fill(200, 0, 0); circle(635, 430, 10);
   fill( 50, 30, 0); circle(635, 445, 10);
    fill(0, 50, 0); circle(635, 460, 10);
    trainNo = true; trainSlow = false;
  }

  if (orangeLight == true) {
   fill(50, 0, 0); circle(635, 430, 10);
    fill(200, 130, 0); circle(635, 445, 10);
    fill(0, 50, 0); circle(635, 460, 10);
    trainSlow = true; trainGo = false;
  }

  if (greenLight == true) {
    fill(50, 0, 0); circle(635, 430, 10);
   fill( 50, 30, 0); circle(635, 445, 10);
    fill(0, 200, 0); circle(635, 460, 10);
    trainGo = true; trainNo = false;
  }

  //------------------------------------------------------------------------

  //train movement

  fill(30);

  movement_train = movement_train + trainSpeed;

  if (trainGo == true) {
    trainSpeed = trainSpeed + 0.08
  };

  if (trainSlow == true || trainNo == true) {
    trainSpeed = trainSpeed - 0.08
  };

  if (trainSpeed >= 8 && trainGo == true) {
    trainSpeed = 8
  };

  if (trainSlow == true && trainSpeed <= 3) {
    trainSpeed = 3
  };

  if (trainSpeed <= 0 && trainNo == true) {
    trainSpeed = 0
  };

  if (movement_train > 2000) {
    movement_train = -100
  };

  //train 
  
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

  circle(movement_train - 170, 490, 20);
  circle(movement_train - 200, 490, 20);
  circle(movement_train - 260, 490, 20);
  circle(movement_train - 290, 490, 20);
  rect(movement_train - 310, 480, 170, 10);
  rect(movement_train - 300, 420, 150, 60);
  rect(movement_train - 330, 475, 40, 8);

  circle(movement_train - 175 - 170, 490, 20);
  circle(movement_train - 175 - 200, 490, 20);
  circle(movement_train - 175 - 260, 490, 20);
  circle(movement_train - 175 - 290, 490, 20);
  rect(movement_train - 175 - 310, 480, 170, 10);
  rect(movement_train - 175 - 300, 420, 150, 60);
  rect(movement_train - 175 - 330, 475, 40, 8);

  //------------------------------------------------------------------------

  //supertrain movement

  fill (0);
  text(trainSSpeed, 20, 20);

  movement_Strain = movement_Strain + trainSSpeed;

  if (trainGo == true) {
    trainSSpeed = trainSSpeed + 0.2
  };

  if (trainSlow == true || trainNo == true) {
    trainSSpeed = trainSSpeed - 0.2
  };

  if (trainSSpeed >= 20 && trainGo == true) {
    trainSSpeed = 20
  };

  if (trainSlow == true && trainSSpeed <= 5) {
    trainSSpeed = 5
  };

  if (trainSSpeed <= 0 && trainNo == true) {
    trainSSpeed = 0
  };

  if (movement_Strain > 5000) {
    movement_Strain = -2000
  };

  //supertrain display

  fill(0)
  circle(movement_Strain + 15, 490, 20);
  circle(movement_Strain - 10, 490, 20);
  circle(movement_Strain - 70, 490, 20);
  circle(movement_Strain - 95, 490, 20);
  quad(movement_Strain + 45, 495, movement_Strain - 25, 495, movement_Strain - 25, 435, movement_Strain + 30, 470,);
  rect(movement_Strain - 115, 435, 90, 60);
  rect(movement_Strain - 125, 435, 90, 60, 8);

  rect(movement_Strain - 285, 435, 160, 60, 8);
  circle(movement_Strain - 145, 490, 20);
  circle(movement_Strain - 175, 490, 20);
  circle(movement_Strain - 235, 490, 20);
  circle(movement_Strain - 265, 490, 20);

  rect(movement_Strain - 170 - 275, 435, 160, 60, 8);
  circle(movement_Strain - 160 - 145, 490, 20);
  circle(movement_Strain - 160 - 175, 490, 20);
  circle(movement_Strain - 160 - 235, 490, 20);
  circle(movement_Strain - 160 - 265, 490, 20);

  rect(movement_Strain - 330 - 275, 435, 160, 60, 8);
  circle(movement_Strain - 320 - 145, 490, 20);
  circle(movement_Strain - 320 - 175, 490, 20);
  circle(movement_Strain - 320 - 235, 490, 20);
  circle(movement_Strain - 320 - 265, 490, 20);

  
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
