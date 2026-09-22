
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

let activePlayer1 = 1;
let activePlayer2 = -1;
let player1Won = false;
let player2Won = false;
let playersTied = false;
let gameOver = false;

let startingScreen = 0;
let victoryScreen1 = 0;
let victoryScreen2 = 0;
let tieScreen = 0;

let color1 = 0;
let color2 = 0;
let colorSelected = false;

//---------------------------------------------------------------------

function mousePressed() {

  //switch turns
  if (keyCode === 0 &&
  mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize ||
  mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize ||
  mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize ||
  mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize ||
  mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize ||
  mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize ||
  mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize ||
  mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize ||
  mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize)
  {
    activePlayer1 = activePlayer1 * -1;
    activePlayer2 = activePlayer2 * -1;
  }

  //---------------------------------------------------------------------


  //square 1
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize
      && activePlayer1 == 1 && square1Filled == false) {
    square1Color = 1; square1Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize
      && activePlayer2 == 1 && square1Filled == false) {
      square1Color = 2; square1Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

  //square 2
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize
      && activePlayer1 == 1 && square2Filled == false) {
    square2Color = 1; square2Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize
      && activePlayer2 == 1 && square2Filled == false) {
      square2Color = 2; square2Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 3
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize
      && activePlayer1 == 1 && square3Filled == false) {
    square3Color = 1; square3Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY && mouseY <= squareBaseY + squareSize
      && activePlayer2 == 1 && square3Filled == false) {
      square3Color = 2; square3Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 4
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize
      && activePlayer1 == 1 && square4Filled == false) {
    square4Color = 1; square4Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize
      && activePlayer2 == 1 && square4Filled == false) {
      square4Color = 2; square4Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 5
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize
      && activePlayer1 == 1 && square5Filled == false) {
    square5Color = 1; square5Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize
      && activePlayer2 == 1 && square5Filled == false) {
      square5Color = 2; square5Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 6
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize
      && activePlayer1 == 1 && square6Filled == false) {
    square6Color = 1; square6Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY && mouseY <= squareBaseY + squareOffsetY + squareSize
      && activePlayer2 == 1 && square6Filled == false) {
      square6Color = 2; square6Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 7
  if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize
      && activePlayer1 == 1 && square7Filled == false) {
    square7Color = 1; square7Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX && mouseX <= squareBaseX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize
      && activePlayer2 == 1 && square7Filled == false) {
      square7Color = 2; square7Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 8
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize
      && activePlayer1 == 1 && square8Filled == false) {
    square8Color = 1; square8Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX && mouseX <= squareBaseX + squareOffsetX + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize
      && activePlayer2 == 1 && square8Filled == false) {
      square8Color = 2; square8Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

   //square 9
  if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize
      && activePlayer1 == 1 && square9Filled == false) {
    square9Color = 1; square9Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
  }
  else if (keyCode === 0 && mouseX >= squareBaseX + squareOffsetX * 2 && mouseX <= squareBaseX + squareOffsetX * 2 + squareSize &&
     mouseY >= squareBaseY + squareOffsetY * 2 && mouseY <= squareBaseY + squareOffsetY * 2 + squareSize
      && activePlayer2 == 1 && square9Filled == false) {
      square9Color = 2; square9Filled = true; totalSquaresFilled = totalSquaresFilled + 1;
     };

}

//---------------------------------------------------------------------

function draw() {
  background(220);

  //---------------------------------------------------------------------

  //base board

  strokeWeight(0);

  fill(0);
  rect(150, 110, 295, 335, 10);

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

  fill(0);
  text(player1Won, 20, 20);
  text(player2Won, 20, 40);
  text(totalSquaresFilled, 20, 60);
  text(playersTied, 20, 80);

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
      player1Won = true;
    }

  if (square1Color == 2 && square2Color == 2 && square3Color == 2 ||
    square4Color == 2 && square5Color == 2 && square6Color == 2 ||
    square7Color == 2 && square8Color == 2 && square9Color == 2 ||
    square1Color == 2 && square4Color == 2 && square7Color == 2 ||
    square2Color == 2 && square5Color == 2 && square8Color == 2 ||
    square3Color == 2 && square6Color == 2 && square9Color == 2 ||
    square1Color == 2 && square5Color == 2 && square9Color == 2 ||
    square3Color == 2 && square5Color == 2 && square7Color == 2) {
      player2Won = true;
    }

  if (totalSquaresFilled >= 9 && player1Won == false && player2Won == false) {
    playersTied = true;
  }

}
