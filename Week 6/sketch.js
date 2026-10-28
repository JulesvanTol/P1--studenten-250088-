//-----------------------------------------------------------------------------------------------------

//sprites
let petSprites = [];
let UISprites = [];
let otherSprites = [];

//-----------------------------------------------------------------------------------------------------

// variable collection 

// background
let backgroundR = 100;
let backgroundG = 150;
let backgroundB = 200;

// pet location 
let petX = 300;
let petY = 300;

//pet status
let petHungry = false;
let petEating = false;
let petSad = false;
let petPlaying = false;
let petTired = false;
let petResting = false;
let sleepTime = 1000;
let petSick = false;
let petDead = false;
let petTooSad = false;

//Status bars
let hunger = 100;
let happiness = 100;
let energy = 100;
let health = 100;
let hungerDrain = 0.03;
let happinessDrain = 0;
let energyDrain = 0.03;
let healthDrain = 0;

//inventory
let inventoryButton = [0, 250, 15, 390];
let inventoryUp = false;
let foodButton = [25, 270, 55, 290];
let foodGrabbed = false;
let foodHeld = false;


//-----------------------------------------------------------------------------------------------------

function preload() {

}

function setup() {
  createCanvas(600, 400);

  //-----------------------------------------------------------------------------------------------------

  //get variables

}

function mousePressed() {

  //-----------------------------------------------------------------------------------------------------

  //Access inventory

  if(mouseButton == LEFT && inventoryUp == false && mouseX >= inventoryButton[0] && mouseY >= inventoryButton[1]
     && mouseX <= inventoryButton[2] && mouseY <= inventoryButton[3]) {
     inventoryUp = true;
  }
  else if (mouseButton == LEFT && inventoryUp == true && mouseX >= inventoryButton[0] && mouseY >= inventoryButton[1]
     && mouseX <= inventoryButton[2] && mouseY <= inventoryButton[3]) {
    inventoryUp = false;
    
  }

 

  //-----------------------------------------------------------------------------------------------------

  //grab&drop food

   if(mouseButton == LEFT && inventoryUp == true && mouseX >= foodButton[0] && mouseY >= foodButton[1]
     && mouseX <= foodButton[2] && mouseY <= foodButton[3]) {
    foodGrabbed = true;
  }

  if(mouseButton == LEFT && hunger <= 70 && foodGrabbed == true && mouseX >= petX - 30 && mouseY >= petY - 30
     && mouseX <= petX + 30 && mouseY <= petY + 30) {
    foodGrabbed = false;
    foodHeld = false;
    hunger = hunger + 30;
  }
  else if (mouseButton == LEFT && hunger >= 70 && foodGrabbed == true && mouseX >= petX - 30 && mouseY >= petY - 30
     && mouseX <= petX + 30 && mouseY <= petY + 30) {
    foodGrabbed = false;
    foodHeld = false;
    hunger = hunger + 30 - (hunger - 70);
  }

   //-----------------------------------------------------------------------------------------------------

  //play music box

}

function mouseDragged() {

  //-----------------------------------------------------------------------------------------------------

  //drag food

  if(mouseButton == LEFT && foodGrabbed == true) {
    foodHeld = true;
  }
  
  

}

function mouseReleased() {

  //-----------------------------------------------------------------------------------------------------

  //

}

function draw() {
  background(backgroundR, backgroundG, backgroundB);

  //-----------------------------------------------------------------------------------------------------

  //Pet

  //Pet location 
  if (petDead == false) {
  circle(petX, petY, 100);
  }
  else if (petDead == true) {
    textSize(50)
    text("Your pet died", petX - 150, petY - 80);
  }

  //Pet status
  if (petHungry == true && petDead == false) {
    textSize(10)
    text("I'm hungry!", petX - 50, petY - 80);
  }

  if (petTired == true && petDead == false) {
    textSize(10)
    text("I'm tired...", petX + 50, petY - 80);
  }


  //-----------------------------------------------------------------------------------------------------

  //Inventory UI

  if (inventoryUp == false) {
    rect(0, 260, 20, 120);
  }
   else if (inventoryUp == true) {
    rect(0, 260, 100, 120);
    rect(25, 270, 30, 20);
    circle(55, 320, 40);
  }

  rect(0, 250, 15, 140);

  if(foodGrabbed == true) {
    circle(mouseX, mouseY, 30);
  }

  //-----------------------------------------------------------------------------------------------------


  //Status bars UI

  textSize(10);

  //Hunger
  text("Hunger", 20, 15);

  rect(20, 20, 100, 10);
  rect(20, 20, hunger, 10);

  hunger = hunger - hungerDrain;

  if (hunger <= 50) {
    petHungry = true;
  }

  //Happiness
  text("Happiness", 20, 45);
  rect(20, 50, 100, 10);
  rect(20, 50, happiness, 10);

  //Energy
  text("Energy", 20, 75);
  rect(20, 80, 100, 10);
  rect(20, 80, energy, 10);

  energy = energy - energyDrain;

  if (energy <= 30) {
    petTired = true;
  }

  if (energy <= 0) {
    petResting = true;
  }

  if (petResting == true) {
    sleepTime = sleepTime - 1;
    text(sleepTime, 20, 170);
    energyDrain = 0;
    hungerDrain = 0;
    happinessDrain = 0;
    healthDrain = 0;

  }

  if (sleepTime <= 0) {
    energy = 100;
    sleepTime = 1000;
    petResting = false;
    petTired = false;
    hungerDrain = 0.03;
    happinessDrain = 0;
    healthDrain = 0;
    energyDrain = 0.03;
  }

  //Health
  text("Health", 20, 105)
  rect(20, 110, 100, 10);
  rect(20, 110, health, 10);

  //Dead
  if (hunger <= 0 && happiness != 0 || health <= 0 && happiness != 0) {
    petDead = true; hunger = 0; energy = 0; health = 0; happiness = 0;
  }
  else if (happiness == 0) {
    petDead = true; hunger = 0; energy = 0; health = 0; happiness = 0; petTooSad = true;
  }

  if (petTooSad == true) {
    
  }

  //-----------------------------------------------------------------------------------------------------

  // Help text
  textSize(10);
  text(energy, 20, 150);
  text(petResting, 20, 170);

}

