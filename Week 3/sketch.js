
function setup() {
  createCanvas(600, 600);
}

//variable collection

let squareBaseX = 160;
let squareBaseY = 160;
let squareOffsetX = 95;
let squareOffsetY = 95;
let squareSize = 85;

let square1Color = 0;
let square2Color = 0;
let square3Color = 0;
let square4Color = 0;
let square5Color = 0;
let square6Color = 0;
let square7Color = 0;
let square8Color = 0;
let square9Color = 0;

let square1Filled = false;
let square2Filled = false;
let square3Filled = false;
let square4Filled = false;
let square5Filled = false;
let square6Filled = false;
let square7Filled = false;
let square8Filled = false;
let square9Filled = false;

let totalSquaresFilled = 0;

let activePlayer1 = -1;
let activePlayer2 = 1;
let player1Won = false;
let player2Won = false;
let playersTied = false;
let gameOver = false;

let startingScreen = true;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let color1R = 255;
let color1G = 0;
let color1B = 0;

let color2R = 0;
let color2G = 255;
let color2B = 0;

let color3R = 0;
let color3G = 0;
let color3B = 255;

let color4R = 255;
let color4G = 255;
let color4B = 0;

let colorPlayer1R = 150;
let colorPlayer1G = 150;
let colorPlayer1B = 150;
let colorPlayer2R = 100;
let colorPlayer2G = 100;
let colorPlayer2B = 100;

let color1Selected = false;
let color2Selected = false;
let color3Selected = false;
let color4Selected = false;

//---------------------------------------------------------------------

function mousePressed() {

  //---------------------------------------------------------------------

  //begin match

  if(keyCode === 0 && mouseX >= 195 && mouseX <= 395 && mouseY >= 505 && mouseY <= 575 && startingScreen == true) {
    startingScreen = false; gameOver = false;
  }

  //---------------------------------------------------------------------

  //go back to start

  if (keyCode === 0 && mouseX >= 295 && mouseX <= 435 && mouseY >= 85 && mouseY <= 125) {
    startingScreen = true;
  }

  //switch turns
  if (keyCode === 0 &&
  mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && square1Filled == false && gameOver == false ||
  mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && square2Filled == false && gameOver == false ||
  mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && square3Filled == false && gameOver == false ||
  mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && square4Filled == false && gameOver == false ||
  mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && square5Filled == false && gameOver == false ||
  mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && square6Filled == false && gameOver == false ||
  mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && square7Filled == false && gameOver == false ||
  mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && square8Filled == false && gameOver == false ||
  mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && square9Filled == false && gameOver == false)
  {
    activePlayer1 = activePlayer1 * -1;
    activePlayer2 = activePlayer2 * -1;
  }

  //---------------------------------------------------------------------

  //scorecount
  if (player1Won == true) {
    scorePlayer1 = scorePlayer1 + 1;
  }
   if (player2Won == true) {
   scorePlayer2 = scorePlayer2 + 1;
  }

  //---------------------------------------------------------------------


  //square 1
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer1 == 1 && square1Filled == false) {
    square1Color = 1; square1Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer2 == 1 && square1Filled == false) {
      square1Color = 2; square1Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

  //square 2
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer1 == 1 && square2Filled == false) {
    square2Color = 1; square2Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer2 == 1 && square2Filled == false) {
      square2Color = 2; square2Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 3
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer1 == 1 && square3Filled == false) {
    square3Color = 1; square3Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer2 == 1 && square3Filled == false) {
      square3Color = 2; square3Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 4
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer1 == 1 && square4Filled == false) {
    square4Color = 1; square4Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer2 == 1 && square4Filled == false) {
      square4Color = 2; square4Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 5
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer1 == 1 && square5Filled == false) {
    square5Color = 1; square5Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer2 == 1 && square5Filled == false) {
      square5Color = 2; square5Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 6
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer1 == 1 && square6Filled == false) {
    square6Color = 1; square6Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer2 == 1 && square6Filled == false) {
      square6Color = 2; square6Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 7
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer1 == 1 && square7Filled == false) {
    square7Color = 1; square7Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer2 == 1 && square7Filled == false) {
      square7Color = 2; square7Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 8
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer1 == 1 && square8Filled == false) {
    square8Color = 1; square8Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer2 == 1 && square8Filled == false) {
      square8Color = 2; square8Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 9
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer1 == 1 && square9Filled == false) {
    square9Color = 1; square9Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer2 == 1 && square9Filled == false) {
      square9Color = 2; square9Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

  //---------------------------------------------------------------------

  //reset

  if (keyCode === 0 && gameOver == true && mouseX >= 205 && mouseX <= 395 &&
    mouseY >= 225 && mouseY <= 295) {
      square1Color = 0;
      square1Filled = false;
      square2Color = 0;
      square2Filled = false;
      square3Color = 0;
      square3Filled = false;
      square4Color = 0;
      square4Filled = false;
      square5Color = 0;
      square5Filled = false;
      square6Color = 0;
      square6Filled = false;
      square7Color = 0;
      square7Filled = false;
      square8Color = 0;
      square8Filled = false;
      square9Color = 0;
      square9Filled = false;
      totalSquaresFilled = 0;
      player1Won = false;
      player2Won = false;
      playersTied = false;
      activePlayer1 = -1;
      activePlayer2 = 1;
      gameOver = false;
    }


}

//---------------------------------------------------------------------

// background

function draw() {
  background(220);
  textSize(15);

  if(activePlayer1 == 1) {
    fill(colorPlayer1R, colorPlayer1G, colorPlayer1B)
    circle(310, 140, 2000);
  }
  else {
    fill(colorPlayer2R, colorPlayer2G, colorPlayer2B)
    circle(310, 140, 2000);
  };

  //---------------------------------------------------------------------

  //base board

  strokeWeight(0);

  fill(50);
  rect(295, 85, 140, 40, 8, 8, 0, 0);
  fill(255)
  text("Back to start", 320, 105);

  fill(0);
  rect(150, 115, 295, 330, 10);

  fill(200);
  rect(160, 160, 85, 85, 5);
  rect(255, 160, 85, 85, 5);
  rect(350, 160, 85, 85, 5);
  rect(160, 255, 85, 85, 5);
  rect(255, 255, 85, 85, 5);
  rect(350, 255, 85, 85, 5);
  rect(160, 350, 85, 85, 5);
  rect(255, 350, 85, 85, 5);
  rect(350, 350, 85, 85, 5);

  textSize(20)
  fill(255);
  text("Score:", 170, 150);
  text(scorePlayer1, 235, 150);
  text("-", 254, 150);
  text(scorePlayer2, 270, 150);
  
  //---------------------------------------------------------------------

  //darken selected square

  //square 1
  if (mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize) {
      fill(120); 
      rect(squareBaseX, squareBaseY, squareSize, squareSize, 5)
     };
  
  //square 2
  if (mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize) {
      fill(120); 
      rect(squareBaseX + squareOffsetX, squareBaseY, squareSize, squareSize, 5)
     };

  //square 3
  if (mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize) {
      fill(120); 
      rect(squareBaseX + squareOffsetX * 2, squareBaseY, squareSize, squareSize, 5)
     };

  //square 4
  if (mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize) {

      fill(120); 
      rect(squareBaseX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
     };

  //square 5
  if (mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize) {
      fill(120); 
      rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
     };

  //square 6
  if (mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize) {
      fill(120); 
      rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
     };

  //square 7
  if (mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize) {
      fill(120); 
      rect(squareBaseX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
     };

  //square 8
  if (mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize) {
      fill(120); 
      rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
     };

  //square 9
  if (mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize) {
      fill(120); 
      rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
     };


  //---------------------------------------------------------------------

  //presscolor

  //square 1
  if (square1Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX, squareBaseY, squareSize, squareSize, 5)
  };
  if (square1Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX, squareBaseY, squareSize, squareSize, 5)
  };

  //square 2
  if (square2Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX + squareOffsetX, squareBaseY, squareSize, squareSize, 5)
  };
  if (square2Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX + squareOffsetX, squareBaseY, squareSize, squareSize, 5)
  };

  //square 3
  if (square3Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY, squareSize, squareSize, 5)
  };
  if (square3Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY, squareSize, squareSize, 5)
  };

  //square 4
  if (square4Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };
  if (square4Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };

  //square 5
  if (square5Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };
  if (square5Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };

  //square 6
  if (square6Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };
  if (square6Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };

  //square 7
  if (square7Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };
  if (square7Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };

  //square 8
  if (square8Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };
  if (square8Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };

  //square 9
  if (square9Color == 1) {
   fill(255, 0, 0);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };
  if (square9Color == 2) {
   fill(0, 0, 255);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };

  //---------------------------------------------------------------------

  //track win condition
  if (square1Color == 1 && square2Color == 1 && square3Color == 1 ||
    square4Color == 1 && square5Color == 1 && square6Color == 1 ||
    square7Color == 1 && square8Color == 1 && square9Color == 1 ||
    square1Color == 1 && square4Color == 1 && square7Color == 1 ||
    square2Color == 1 && square5Color == 1 && square8Color == 1 ||
    square3Color == 1 && square6Color == 1 && square9Color == 1 ||
    square1Color == 1 && square5Color == 1 && square9Color == 1 ||
    square3Color == 1 && square5Color == 1 && square7Color == 1) {
      player1Won = true; gameOver = true; 
    }

  if (square1Color == 2 && square2Color == 2 && square3Color == 2 ||
    square4Color == 2 && square5Color == 2 && square6Color == 2 ||
    square7Color == 2 && square8Color == 2 && square9Color == 2 ||
    square1Color == 2 && square4Color == 2 && square7Color == 2 ||
    square2Color == 2 && square5Color == 2 && square8Color == 2 ||
    square3Color == 2 && square6Color == 2 && square9Color == 2 ||
    square1Color == 2 && square5Color == 2 && square9Color == 2 ||
    square3Color == 2 && square5Color == 2 && square7Color == 2) {
      player2Won = true; gameOver = true;
    }

  if (totalSquaresFilled >= 9 && player1Won == false && player2Won == false) {
    playersTied = true;  gameOver = true;
  }

  //---------------------------------------------------------------------

  //results screens

  textSize(45)

  if (player1Won == true) {
    fill(155, 0, 0);
    rect(100, 110, 410, 220, 10);
    fill(255, 0, 0);
    rect(110, 120, 390, 200, 10);
    fill(255);
    text("PLAYER 1 WON!", 130, 190);
    fill(150, 0, 0);
    rect(200, 220, 200, 60, 8);
    fill(250, 150, 150);
    rect(205, 225, 190, 50, 8);
    fill(255);
    textSize(25);
    text("RESTART", 240, 260);
  }

  if (player2Won == true) {
    fill(0, 0, 155);
    rect(100, 110, 410, 220, 10);
    fill(0, 0, 255);
    rect(110, 120, 390, 200, 10);
    fill(255);
    text("PLAYER 2 WON!", 130, 190);
    fill(150, 150, 250);
    rect(200, 220, 200, 60, 8);
    fill(0, 0, 150);
    rect(205, 225, 190, 50, 8);
    fill(255);
    textSize(25);
    text("RESTART", 240, 260);
  }

  if (playersTied == true) {
    fill(55, 0, 55);
    rect(100, 110, 410, 220, 10);
    fill(155, 120, 155);
    rect(110, 120, 390, 200, 10);
    fill(255);
    text("It's a tie...", 200, 190);
    fill(100, 50, 100);
    rect(200, 220, 200, 60, 8);
    fill(50, 0, 50);
    rect(205, 225, 190, 50, 8);
    fill(255);
    textSize(25);
    text("RESTART", 240, 260);
  }

  //---------------------------------------------------------------------

   if (startingScreen == true) {
    gameOver = true;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    square1Color = 0;
    square1Filled = false;
    square2Color = 0;
    square2Filled = false;
    square3Color = 0;
    square3Filled = false;
    square4Color = 0;
    square4Filled = false;
    square5Color = 0;
    square5Filled = false;
    square6Color = 0;
    square6Filled = false;
    square7Color = 0;
    square7Filled = false;
    square8Color = 0;
    square8Filled = false;
    square9Color = 0;
    square9Filled = false;
    totalSquaresFilled = 0;
    player1Won = false;
    player2Won = false;
    playersTied = false;
    activePlayer1 = -1;
    activePlayer2 = 1;
    fill(50, 30, 50);
    circle(200, 200, 2000);
    fill(130, 100, 130);
    rect(100, 50, 400, 500, 10);
    fill(150, 120, 150);
    rect(105, 55, 390, 490, 10);
    textSize(50);
    fill(255);
    text("TIC TAC TOE", 140, 110);
    fill(120, 60, 120);
    rect(190, 500, 210, 80, 8);
    fill(80, 30, 80);
    rect(195, 505, 200, 70, 8);
    fill(255);
    textSize(40);
    text("BEGIN", 230, 555);
    fill(40);
    rect(170, 165, 250, 285, 10);
    fill(205, 80, 80);
    rect(180, 210, 110, 110, 10);
    fill(80, 80, 205);
    rect(300, 210, 110, 110, 10);
    fill(80, 205, 80);
    rect(180, 330, 110, 110, 10);
    fill(205, 205, 80);
    rect(300, 330, 110, 110, 10);
    textSize(35);
    fill(255);
    text("Pick your color", 178, 200);

   }

}
