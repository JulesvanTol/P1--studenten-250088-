 let randomColors = [];
 let squares = [0, 1, 2, 3, 4];
 let randomNumbers = [];
 let numbers9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 
function setup() {
  createCanvas(380, 350);

 for (RCLoop = 0; RCLoop < squares.length; RCLoop++) {
  randomColors = [color(random(0,255), random(0,255), random(0,255)),
  color(random(0,255), random(0,255), random(0,255)),
  color(random(0,255), random(0,255), random(0,255)),
  color(random(0,255), random(0,255), random(0,255)),
  color(random(0,255), random(0,255), random(0,255))];
 }

 for (Numbersloop = 0; Numbersloop < squares.length; Numbersloop++) {
    randomNumbers = [int(random(0,100)), int(random(0,100)), int(random(0,100)), int(random(0,100)),
    int(random(0,100)), int(random(0,100)), int(random(0,100)), int(random(0,100)),
     int(random(0,100)), int(random(0,100)), int(random(0,100)), int(random(0,100)),]
 }
  
}

//-----------------------------------------------------------------------------

// 8 setup.

function draw() {
  background(220);

  //-----------------------------------------------------------------------------

  // numbers
  fill(0);

  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);

  //-----------------------------------------------------------------------------

  // 1.

  let colors = ["red", "green", "blue", "purple", "yellow"]; 

  for (let i = 0; i < colors.length; i ++) {
    fill(colors[i]);
    text(colors[i], 35, 15 + (i * 15));
  }

  //-----------------------------------------------------------------------------

  // 2.

  colors.shift();
  colors.push("red");

  for (let i2 = 0; i2 < colors.length; i2 ++) {
    fill(colors[i2]);
    text(colors[i2], 35, 100 + (i2 * 15));
  }

  //-----------------------------------------------------------------------------

  // 3.

  colors.splice(1, 2);

  for (let i3 = 0; i3 < colors.length; i3 ++) {
    fill(colors[i3]);
    text(colors[i3], 35, 190 + (i3 * 15));
  }

  //-----------------------------------------------------------------------------

  // 4.

  fill(0)
  let missedNumbers = 0;
  let numbers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];

  for(let i4 = 0; i4 < numbers.length; i4++) {
    if (numbers[i4] <= 299) {
      text(numbers[i4], 35, 250 + ((i4 - missedNumbers) * 15));
    }
    else {
      missedNumbers = missedNumbers + 1;
    }
  } 

  //-----------------------------------------------------------------------------

  // 5.

  let numbers2 = [3, 55, 93, 20, 102, 6];
  let numbers3 = [14, 22, 80, 5];

  for(let i5 = 0; i5 < numbers2.length; i5++) {
    text(numbers2[0] + numbers3[0] +
        numbers2[1] + numbers3[1] +
        numbers2[2] + numbers3[2] +
        numbers2[3] + numbers3[3] +
        numbers2[4] + numbers2[5], 135, 15);
  }
  
  //-----------------------------------------------------------------------------
  
  // 6.
  
  let eTracker = 0;
   
  let bigWord = ["o","v","e","r","h","e","i","d","s"
    ,"f","i","n","a","n","c","i","e","r","i","n","g","s"
    ,"t","e","k","o","r","t"];
  
  for(let i6 = 0; i6 < bigWord.length; i6++) {

    if (i6 == "e") {
      eTracker++;
    }

    text(eTracker, 135, 100);
  }

  //-----------------------------------------------------------------------------
  
  // 7.

  let orderedColors = ["red", "green", "blue", "purple", "yellow"];

  for(let i7 = 0; i7 < orderedColors.length; i7++) {
    orderedColors.sort();
    text(orderedColors[i7], 135, 190 + (i7 * 15));
  }

  //-----------------------------------------------------------------------------
  
  // 8.

  for(let i8 = 0; i8 < squares.length; i8++) {
    fill(randomColors[i8]);
    rect(120 + (i8 * 30), 290, 30, 30);

  }

  //-----------------------------------------------------------------------------
  
  // 9.
  fill(0)

  for(let i9 = 0; i9 < numbers9.length; i9++) {
    text(randomNumbers[i9], 255, 15 + (15 * i9));
  }

}
