function setup() {
  createCanvas(800, 600);
}

//Variable collection

let movement_train = -100;
let movement_Strain = 100;
let movement_smog1 = 0;
let movement_smog2 = 75;
let movement_smog3 = 0;
let movement_sunX = 200;
let movement_sunY = 200;
let movement_moonX = 0;
let movement_moonY = -200;

let colordark = 1;
let shinesize = 1;
let shinesize2 = 1;
let shinesize3 = 1;
let Mshinesize = 1;
let Mshinesize2 = 1;
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

  //day&night cycle

  background(150 + colordark * 1.1, 130 + colordark * 0.8, 230 + colordark * 1.5);
  strokeWeight(0);

  /*fill(150 + colordark, 110 + colordark, 160 + colordark);
  circle(400, 1050, 2000);
  fill(180 + colordark, 120 + colordark, 150 + colordark);
  circle(400, 1100, 2000);
  fill(220 + colordark, 150 + colordark, 160 + colordark);
  circle(400, 1150, 2000); */

  if(movement_moonY >= 200) {
    colordark = colordark + 0.1
  };

   if(movement_sunY >= 200) {
    colordark = colordark - 0.1
  };

  //------------------------------------------------------------------------

  //mouse test

  /*fill(255);

  text(mouseX, 20, 20);
  text(mouseY, 20, 40);*/

  //------------------------------------------------------------------------

  //sun

  fill(235, 165, 100);
  circle(movement_sunX, movement_sunY, shinesize);

  shinesize = shinesize * sin(1 + frameCount * 0.02) * 0.2 + 120;

  fill(255, 215, 100);
  circle(movement_sunX, movement_sunY, shinesize2);

  shinesize2 = shinesize2 * sin( 1.3 + frameCount * 0.02) * 0.2 + 100;

  fill(255, 255, 200);
  circle(movement_sunX, movement_sunY, shinesize3);

  shinesize3 = shinesize3 * sin(1.6 + frameCount * 0.02) * 0.2 + 80;

  movement_sunY = movement_sunY + 0.3;

  if (movement_sunY >= 600) {
    movement_sunY = -200; movement_sunX = 0
  };

 movement_sunX = movement_sunX + 0.15;

  //moon

  fill(175);
  circle(movement_moonX, movement_moonY, Mshinesize);

  Mshinesize = Mshinesize * sin(1 + frameCount * 0.04) * 0.05 + 100;

  fill(205);
  circle(movement_moonX, movement_moonY, Mshinesize2);

  Mshinesize2 = Mshinesize2 * sin( 1.3 + frameCount * 0.04) * 0.05 + 90;

  fill(255);
  circle(movement_moonX, movement_moonY, 80);

  movement_moonY = movement_moonY + 0.3;

  if (movement_moonY >= 600) {
    movement_moonY = -200; movement_moonX = 0
  };

  movement_moonX = movement_moonX + 0.15;

  //------------------------------------------------------------------------


  //Mountains and trees

  fill(80);
  triangle(0, 600, 0, 200, 600, 600);
  triangle(800, 600, 800, 100, 370, 600);
  triangle(0, 400, 550, 160, 1300, 400);
  rect(0, 400, 800, 200);

  fill(60);
  rect(50, 350, 8, 50);
  triangle(30, 355, 78, 355, 54, 330);
  triangle(35, 340, 73, 340, 54, 315);
  triangle(40, 325, 68, 325, 54, 300);

  rect(450, 350, 8, 50);
  triangle(430, 355, 478, 355, 454, 330);
  triangle(435, 340, 473, 340, 454, 315);
  triangle(440, 325, 468, 325, 454, 300);

  rect(550, 350 - 55, 8, 50);
  triangle(530, 355 - 55, 578, 355 - 55, 554, 330 - 55);
  triangle(535, 340 - 55, 573, 340 - 55, 554, 315 - 55);
  triangle(540, 325 - 55, 568, 325 - 55, 554, 300 - 55);

  triangle(0, 450, 250, 200, 800, 550);
  triangle(0, 500, 680, 270, 1800, 600);
  triangle(-500, 500, 200, 340, 200, 500);
  rect(0, 400, 800, 200);

  //------------------------------------------------------------------------

  //smog movement

  movement_smog1 = movement_smog1 + 1.8;

  if (movement_smog1 >= 100) {
    movement_smog1 = 0;
  };

  movement_smog2 = movement_smog2 - 1.4;

  if (movement_smog2 <= -50) {
    movement_smog2 = 50;
  };

  movement_smog3 = movement_smog3 + 1;

  if (movement_smog3 >= 100) {
    movement_smog3 = 0;
  };

  //smog display

  fill(120);
  circle(movement_smog1, 480, 150);
  circle(movement_smog1 + 100, 480, 150);
  circle(movement_smog1 + 200, 480, 150);
  circle(movement_smog1 + 300, 480, 150);
  circle(movement_smog1 + 400, 480, 150);
  circle(movement_smog1 + 500, 480, 150);
  circle(movement_smog1 + 600, 480, 150);
  circle(movement_smog1 + 700, 480, 150);
  circle(movement_smog1 + 800, 480, 150);
  circle(movement_smog1 - 100, 480, 150);
  circle(movement_smog1 - 200, 480, 150);

  fill(150);
  circle(movement_smog2 + 50, 550, 150);
  circle(movement_smog2 + 150, 550, 150);
  circle(movement_smog2 + 250, 550, 150);
  circle(movement_smog2 + 350, 550, 150);
  circle(movement_smog2 + 450, 550, 150);
  circle(movement_smog2 + 550, 550, 150);
  circle(movement_smog2 + 650, 550, 150);
  circle(movement_smog2 + 750, 550, 150);
  circle(movement_smog2 + 850, 550, 150);
  circle(movement_smog2 - 50, 550, 150);
  circle(movement_smog2 - 150, 550, 150);

  fill(180);
  circle(movement_smog3, 620, 150);
  circle(movement_smog3 + 100, 620, 150);
  circle(movement_smog3 + 200, 620, 150);
  circle(movement_smog3 + 300, 620, 150);
  circle(movement_smog3 + 400, 620, 150);
  circle(movement_smog3 + 500, 620, 150);
  circle(movement_smog3 + 600, 620, 150);
  circle(movement_smog3 + 700, 620, 150);
  circle(movement_smog3 + 800, 620, 150);
  circle(movement_smog3 - 100, 620, 150);
  circle(movement_smog3 - 200, 620, 150);

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

  if (trainSlow == true && movement_train >= 200 && movement_train <= 600 ||
     trainNo == true && movement_train >= 200 && movement_train <= 600) {
    trainSpeed = trainSpeed - 0.05
  }
    else {
     trainSpeed = trainSpeed + 0.05
    };

  if (trainSpeed >= 5) {
    trainSpeed = 5
  };

  if (trainSlow == true && trainSpeed <= 2) {
    trainSpeed = 2
  };

  if (trainNo == true && movement_train >= 500 && movement_train <= 600) {
    trainSpeed = trainSpeed - 0.05
  }
  else if (trainSpeed <= 2 && trainNo == true && movement_train >= 200) {
    trainSpeed = 2
  };

  if (trainSpeed <= 0) {
    trainSpeed = 0
  };

  if (movement_train > 2000) {
    movement_train = -100
  };

  //train display
  
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

  //lights

  fill(200, 180, 100);

  if (colordark >= - 80) {
    fill(30)
  };

  rect(movement_train - 110, 430, 20, 30, 5);

  //------------------------------------------------------------------------

  //supertrain movement

  movement_Strain = movement_Strain + trainSSpeed;

  movement_Strain = movement_Strain + trainSSpeed;

  if (trainSlow == true && movement_Strain >= 0 && movement_Strain <= 600 ||
     trainNo == true && movement_Strain >= 0 && movement_Strain <= 600) {
    trainSSpeed = trainSSpeed - 0.1
  }
  else {
    trainSSpeed = trainSSpeed + 0.1
  };

  if (trainSSpeed >= 7) {
    trainSSpeed = 7
  };

  if (trainSlow == true && trainSSpeed <= 4) {
    trainSSpeed = 4
  };

  if (trainNo == true && movement_Strain >= 400 && movement_Strain <= 600) {
    trainSSpeed = trainSSpeed - 0.1
  }
  else if (trainSSpeed <= 4 && trainNo == true && movement_Strain >= 0) {
    trainSSpeed = 4
  };

  if (trainSSpeed <= 0) {
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

  //lights

  fill(230, 230, 150);

  if (colordark >= -80) {
    fill(0)  
  };
  
  triangle(movement_Strain + 18, 470, movement_Strain - 15, 470, movement_Strain - 15, 450);
  rect(movement_Strain - 110, 450, 30, 20, 2);
  rect(movement_Strain - 70, 450, 30, 20, 2);
  rect(movement_Strain - 260, 450, 30, 20, 2);
  rect(movement_Strain - 220, 450, 30, 20, 2);
  rect(movement_Strain - 180, 450, 30, 20, 2);
  rect(movement_Strain - 160 - 260, 450, 30, 20, 2);
  rect(movement_Strain - 160 - 220, 450, 30, 20, 2);
  rect(movement_Strain - 160 - 180, 450, 30, 20, 2);
  rect(movement_Strain - 320 - 260, 450, 30, 20, 2);
  rect(movement_Strain - 320 - 220, 450, 30, 20, 2);
  rect(movement_Strain - 320 - 180, 450, 30, 20, 2);
  
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

  //------------------------------------------------------------------------

  //trees foreground

  fill(0)

  triangle(100, 600, 300, 600, 200, 500);
  triangle(120, 560, 280, 560, 200, 440);
  triangle(140, 520, 260, 520, 200, 400);
  triangle(470, 600, 530, 600, 500, 550);
  triangle(720, 570, 800, 570, 800, 460);
  triangle(700, 600, 800, 600, 800, 540);

  //------------------------------------------------------------------------

}
