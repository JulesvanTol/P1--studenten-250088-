
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
let beginMatch = false;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let color1R = 255;
let color1G = 100;
let color1B = 100;

let color2R = 100;
let color2G = 100;
let color2B = 255;

let color3R = 100;
let color3G = 255;
let color3B = 100;

let color4R = 255;
let color4G = 235;
let color4B = 100;

let colorPlayer1R = 0;
let colorPlayer1G = 0;
let colorPlayer1B = 0;
let colorPlayer2R = 0;
let colorPlayer2G = 0;
let colorPlayer2B = 0;

let color1Selected = false;
let color2Selected = false;
let color3Selected = false;
let color4Selected = false;
let colorCount = 2;

//------------------------------------------------------------------------------------------------------------------------------------------

function mousePressed() {

  //------------------------------------------------------------------------------------------------------------------------------------------

  //begin match

  if(keyCode === 0 && mouseX >= 195 && mouseX <= 395 && mouseY >= 505 && mouseY <= 575 && startingScreen == true && beginMatch == true) {
    startingScreen = false;
    gameOver = false;
    activePlayer1 = -1;
    activePlayer2 = 1;
  }

  //------------------------------------------------------------------------------------------------------------------------------------------

  //go back to start

  if (keyCode === 0 && mouseX >= 295 && mouseX <= 435 && mouseY >= 85 && mouseY <= 125 && startingScreen == false) {
    startingScreen = true;
    color1Selected = false;
    color2Selected = false;
    color3Selected = false;
    color4Selected = false;
    activePlayer1 = -1;
    activePlayer2 = 1;
    colorCount = 2;
  }

  //------------------------------------------------------------------------------------------------------------------------------------------

  //switch turns in game

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

  //------------------------------------------------------------------------------------------------------------------------------------------

  //switch players in menu
  if (keyCode === 0 && colorCount >> 0 && mouseX >= 180 && mouseX <= 410 && mouseY >= 210 && mouseY <= 440 &&
    color1Selected == true && startingScreen == true ||
    color2Selected == true && startingScreen == true ||
    color3Selected == true && startingScreen == true ||
    color4Selected == true && startingScreen == true)
    {
      activePlayer1 = activePlayer1 * -1;
      activePlayer2 = activePlayer2 * -1;
    }

  //------------------------------------------------------------------------------------------------------------------------------------------

  //scorecount

  if (player1Won == true) {
    scorePlayer1 = scorePlayer1 + 1;
  }
   if (player2Won == true) {
   scorePlayer2 = scorePlayer2 + 1;
  }

  //------------------------------------------------------------------------------------------------------------------------------------------

  //press spaces

  //square 1
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer1 == -1 && square1Filled == false) {
    square1Color = 1; square1Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer2 == -1 && square1Filled == false) {
      square1Color = 2; square1Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

  //square 2
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer1 == -1 && square2Filled == false) {
    square2Color = 1; square2Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer2 == -1 && square2Filled == false) {
      square2Color = 2; square2Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 3
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer1 == -1 && square3Filled == false) {
    square3Color = 1; square3Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize && gameOver == false
      && activePlayer2 == -1 && square3Filled == false) {
      square3Color = 2; square3Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 4
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer1 == -1 && square4Filled == false) {
    square4Color = 1; square4Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer2 == -1 && square4Filled == false) {
      square4Color = 2; square4Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 5
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer1 == -1 && square5Filled == false) {
    square5Color = 1; square5Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer2 == -1 && square5Filled == false) {
      square5Color = 2; square5Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 6
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer1 == -1 && square6Filled == false) {
    square6Color = 1; square6Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize && gameOver == false
      && activePlayer2 == -1 && square6Filled == false) {
      square6Color = 2; square6Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 7
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer1 == -1 && square7Filled == false) {
    square7Color = 1; square7Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer2 == -1 && square7Filled == false) {
      square7Color = 2; square7Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 8
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer1 == -1 && square8Filled == false) {
    square8Color = 1; square8Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer2 == -1 && square8Filled == false) {
      square8Color = 2; square8Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 9
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer1 == -1 && square9Filled == false) {
    square9Color = 1; square9Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize && gameOver == false
      && activePlayer2 == -1 && square9Filled == false) {
      square9Color = 2; square9Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

  //------------------------------------------------------------------------------------------------------------------------------------------

  //select colors

  if (keyCode === 0 && gameOver == true && mouseX >= 180 && mouseX <= 290 &&
    mouseY >= 210 && mouseY <= 320 && startingScreen == true && activePlayer1 == 1 && color1Selected == false && colorCount >> 0) {
      colorPlayer1R = color1R;
      colorPlayer1G = color1G;
      colorPlayer1B = color1B;
      color1Selected = true;
      colorCount = colorCount - 1
    };

  if (keyCode === 0 && gameOver == true && mouseX >= 180 && mouseX <= 290 &&
    mouseY >= 210 && mouseY <= 320 && startingScreen == true && activePlayer2 == 1 && color1Selected == false && colorCount >> 0) {
      colorPlayer2R = color1R;
      colorPlayer2G = color1G;
      colorPlayer2B = color1B;
      color1Selected = true;
      colorCount = colorCount - 1
    };

  if (keyCode === 0 && gameOver == true && mouseX >= 300 && mouseX <= 410 &&
    mouseY >= 210 && mouseY <= 320 && startingScreen == true && activePlayer1 == 1 && color2Selected == false && colorCount >> 0) {
      colorPlayer1R = color2R;
      colorPlayer1G = color2G;
      colorPlayer1B = color2B;
      color2Selected = true;
      colorCount = colorCount - 1
    };

  if (keyCode === 0 && gameOver == true && mouseX >= 300 && mouseX <= 410 &&
    mouseY >= 210 && mouseY <= 320 && startingScreen == true && activePlayer2 == 1 && color2Selected == false && colorCount >> 0) {
      colorPlayer2R = color2R;
      colorPlayer2G = color2G;
      colorPlayer2B = color2B;
      color2Selected = true;
      colorCount = colorCount - 1
    };

  if (keyCode === 0 && gameOver == true && mouseX >= 180 && mouseX <= 290 &&
    mouseY >= 330 && mouseY <= 440 && startingScreen == true && activePlayer1 == 1 && color3Selected == false && colorCount >> 0) {
      colorPlayer1R = color3R;
      colorPlayer1G = color3G;
      colorPlayer1B = color3B;
      color3Selected = true;
      colorCount = colorCount - 1
    };

  if (keyCode === 0 && gameOver == true && mouseX >= 180 && mouseX <= 290 &&
    mouseY >= 330 && mouseY <= 440 && startingScreen == true && activePlayer2 == 1 && color3Selected == false && colorCount >> 0) {
      colorPlayer2R = color3R;
      colorPlayer2G = color3G;
      colorPlayer2B = color3B;
      color3Selected = true;
      colorCount = colorCount - 1
    };

  if (keyCode === 0 && gameOver == true && mouseX >= 300 && mouseX <= 410 &&
    mouseY >= 330 && mouseY <= 440 && startingScreen == true && activePlayer1 == 1 && color4Selected == false && colorCount >> 0) {
      colorPlayer1R = color4R;
      colorPlayer1G = color4G;
      colorPlayer1B = color4B;
      color4Selected = true;
      colorCount = colorCount - 1
    };

  if (keyCode === 0 && gameOver == true && mouseX >= 300 && mouseX <= 410 &&
    mouseY >= 330 && mouseY <= 440 && startingScreen == true && activePlayer2 == 1 && color4Selected == false && colorCount >> 0) {
      colorPlayer2R = color4R;
      colorPlayer2G = color4G;
      colorPlayer2B = color4B;
      color4Selected = true;
      colorCount = colorCount - 1
    };

  //------------------------------------------------------------------------------------------------------------------------------------------

  // press color reset

  if (keyCode === 0 && mouseX >= 255 && mouseX <= 335 && mouseY >= 440 && mouseY <= 470 && startingScreen == true) {
    activePlayer1 = -1;
    activePlayer2 = 1;
    colorCount = 2;
    color1Selected = false;
    color2Selected = false;
    color3Selected = false;
    color4Selected = false;
  }

  //------------------------------------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------------------

// background

function draw() {
  background(220);
  textSize(15);

  if(activePlayer1 == 1) {
    fill(colorPlayer1R - 150, colorPlayer1G - 150, colorPlayer1B - 150)
    circle(310, 140, 2000);
  }
  else {
    fill(colorPlayer2R - 150, colorPlayer2G - 150, colorPlayer2B - 150)
    circle(310, 140, 2000);
  };

  //------------------------------------------------------------------------------------------------------------------------------------------

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
  text(scorePlayer2, 235, 150);
  text("-", 254, 150);
  text(scorePlayer1, 270, 150);
  
  //------------------------------------------------------------------------------------------------------------------------------------------

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


  //------------------------------------------------------------------------------------------------------------------------------------------

  //presscolor

  //square 1
  if (square1Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX, squareBaseY, squareSize, squareSize, 5)
  };
  if (square1Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX, squareBaseY, squareSize, squareSize, 5)
  };

  //square 2
  if (square2Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX + squareOffsetX, squareBaseY, squareSize, squareSize, 5)
  };
  if (square2Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX + squareOffsetX, squareBaseY, squareSize, squareSize, 5)
  };

  //square 3
  if (square3Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY, squareSize, squareSize, 5)
  };
  if (square3Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY, squareSize, squareSize, 5)
  };

  //square 4
  if (square4Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };
  if (square4Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };

  //square 5
  if (square5Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };
  if (square5Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };

  //square 6
  if (square6Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };
  if (square6Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY, squareSize, squareSize, 5)
  };

  //square 7
  if (square7Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };
  if (square7Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };

  //square 8
  if (square8Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };
  if (square8Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
   rect(squareBaseX + squareOffsetX, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };

  //square 9
  if (square9Color == 1) {
   fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
   rect(squareBaseX + squareOffsetX * 2, squareBaseY + squareOffsetY * 2, squareSize, squareSize, 5)
  };
  if (square9Color == 2) {
   fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
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

  //------------------------------------------------------------------------------------------------------------------------------------------

  //results screens

  textSize(45)

  if (player1Won == true) {
    fill(colorPlayer1R - 100, colorPlayer1G - 100, colorPlayer1B - 100);
    rect(100, 110, 410, 220, 10);
    fill(colorPlayer1R, colorPlayer1G, colorPlayer1B);
    rect(110, 120, 390, 200, 10);
    fill(255);
    text("PLAYER 2 WON!", 130, 190);
    fill(colorPlayer1R - 100, colorPlayer1G - 100, colorPlayer1B - 100);
    rect(200, 220, 200, 60, 8);
    fill(colorPlayer1R - 50, colorPlayer1G - 50, colorPlayer1B - 50);
    rect(205, 225, 190, 50, 8);
    fill(255);
    textSize(25);
    text("RESTART", 240, 260);
  }

  if (player2Won == true) {
    fill(colorPlayer2R - 100, colorPlayer2G - 100, colorPlayer2B - 100);
    rect(100, 110, 410, 220, 10);
    fill(colorPlayer2R, colorPlayer2G, colorPlayer2B);
    rect(110, 120, 390, 200, 10);
    fill(255);
    text("PLAYER 1 WON!", 130, 190);
    fill(colorPlayer2R - 100, colorPlayer2G - 100, colorPlayer2B - 100);
    rect(200, 220, 200, 60, 8);
    fill(colorPlayer2R - 50, colorPlayer2G - 50, colorPlayer2B - 50);
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

  //------------------------------------------------------------------------------------------------------------------------------------------

  //starting screen

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
    fill(50, 30, 50);
    circle(200, 200, 2000);
    fill(130, 100, 130);
    rect(100, 50, 400, 500, 10);
    fill(150, 120, 150);
    rect(105, 55, 390, 490, 10);
    textSize(50);
    fill(255);
    text("TIC TAC TOE", 140, 110);
    fill(60, 30, 60);
    rect(190, 500, 210, 80, 8);
    fill(50, 10, 50);
    rect(195, 505, 200, 70, 8);
    fill(55);
    textSize(40);
    text("BEGIN", 230, 555);
    fill(40);
    rect(170, 165, 250, 285, 10);
    rect(255, 440, 80, 30, 8);
    fill(150, 50, 50);
    rect(180, 210, 110, 110, 10);
    fill(50, 50, 155);
    rect(300, 210, 110, 110, 10);
    fill(50, 155, 50);
    rect(180, 330, 110, 110, 10);
    fill(155, 155, 50);
    rect(300, 330, 110, 110, 10);
    textSize(35);
    fill(255);
    text("Pick your color", 178, 197);
    textSize(20);
    text("Reset", 267, 462)

   }

  //------------------------------------------------------------------------------------------------------------------------------------------

  //select buttons brighten

  if (color1Selected == true && startingScreen == true) {
   fill(255, 80, 80);
    rect(180, 210, 110, 110, 10)
  };

  if (color2Selected == true && startingScreen == true) {
   fill(80, 80, 255);
    rect(300, 210, 110, 110, 10)
  };

  if (color3Selected == true && startingScreen == true) {
   fill(80, 255, 80);
    rect(180, 330, 110, 110, 10)
  };

  if (color4Selected == true && startingScreen == true) {
   fill(255, 255, 80);
    rect(300, 330, 110, 110, 10)
  };

  if (startingScreen == true && colorCount <= 0) {
    fill(180, 60, 180);
    rect(190, 500, 210, 80, 8);
    fill(120, 30, 120);
    rect(195, 505, 200, 70, 8);
    fill(255);
    textSize(40);
    text("BEGIN", 230, 555);
    beginMatch = true;
  }

  //------------------------------------------------------------------------------------------------------------------------------------------

  // helptext

  /*textSize(10);
  fill(255);
  text(color1Selected, 20, 20);
  text(startingScreen, 20, 40);
  text(colorPlayer1R, 20, 60);
  text(colorPlayer1G, 40, 60);
  text(colorPlayer1B, 60, 60);
  text(colorPlayer2R, 20, 80);
  text(colorPlayer2G, 40, 80);
  text(colorPlayer2B, 60, 80);
  text(activePlayer1, 20, 100);
  text(activePlayer2, 20, 120);
  text(colorCount, 20, 140);
  text(color1Selected, 20, 180);
  text(color2Selected, 20, 200);
  text(color3Selected, 20, 220);
  text(color4Selected, 20, 240);*/
  
  
}
