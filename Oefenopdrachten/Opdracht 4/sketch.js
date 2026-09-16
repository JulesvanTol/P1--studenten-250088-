function setup() {
  createCanvas(800, 400);
}

//variable collection

let counter = 0;
let redLight = true
let orangeLight = false
let greenLight = false
let ballposX = 500
let ballposY = 200

//cycle stoplight states

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

function draw() {
  background(220);

  fill(0);
  textSize(10);

  //box

  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20);

  if(keyIsDown(66) == true) {
   rect(20, 40, 60, 60)
  };

  //counter

  text("2. Druk op spatie om het getal op 0 te zetten", 20, 120);

  counter = counter + 1;

  if (counter >= 500) {
    counter = counter - 500
  }; 

  text(counter, 20, 140);

  //stoplight

  text("3. Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240);

  strokeWeight(0);

  fill(80);
  rect(20, 260, 30, 100);

  //stoplight display

  if(redLight == true) {
    fill(200, 0, 0); circle(35, 280, 20);
   fill( 50, 30, 0); circle(35, 310, 20);
    fill(0, 50, 0); circle(35, 340, 20);
  }

  if (orangeLight == true) {
   fill(50, 0, 0); circle(35, 280, 20);
    fill(200, 130, 0); circle(35, 310, 20);
    fill(0, 50, 0); circle(35, 340, 20);
  }

  if (greenLight == true) {
    fill(50, 0, 0); circle(35, 280, 20);
   fill( 50, 30, 0); circle(35, 310, 20);
    fill(0, 200, 0); circle(35, 340, 20);
  }

  //8 ball

  fill(0);

  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.",  360, 20);

  circle(ballposX, ballposY, 100);
  fill(255);
  circle(ballposX, ballposY, 50);
  textSize(40);
  fill(0);
  text("8", ballposX - 11, ballposY + 13);
  
  //8ball controls

  if (keyIsDown(37) || keyIsDown(65)) {
    ballposX = ballposX - 1;
  }

  if (keyIsDown(38) || keyIsDown(87)) {
    ballposY = ballposY - 1;
  }

  if (keyIsDown(39) || keyIsDown(68)) {
    ballposX = ballposX + 1;
  }

  if (keyIsDown(40) || keyIsDown(83)) {
    ballposY = ballposY + 1;
  }

}
