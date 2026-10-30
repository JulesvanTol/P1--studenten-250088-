//-----------------------------------------------------------------------------------------------------

// sprites

let petAnimations = ["pet_eat", "pet_idle", "pet_saddest", "pet_sick", "pet_sleep"];

let petSprites = ["pet_dead", "pet_energyhigh", "pet_energylow", "pet_energymid", "pet_energyzero", "pet_food", "pet_foodbox",
   "pet_fullnesshigh", "pet_fullnesslow", "pet_fullnessmid", "pet_highhealth", "pet_home", "pet_joyhigh", "pet_joylow", "pet_joymid",
    "pet_lowhealth", "pet_midhealth", "pet_minigame", "pet_minigamebutton", "pet_whackable", "pet_zpill", "pet_zpillbox"];

let images = [];
let animations = [];
//-----------------------------------------------------------------------------------------------------

// variable collection 

// pet location 
let petX = 300;
let petY = 300;

//pet status
let petHungry = true;
let petEating = false;
let eatTime = 100;
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
let hungerDrain = 0.02;
let happinessDrain = 0.02;
let energyDrain = 0.01;
let healthDrain = -0.06;

//inventory
let inventoryButton = [0, 250, 15, 390];
let inventoryUp = false;
let foodButton = [25, 270, 55, 290];
let minigameButton = [45, 310, 85, 370];
let healButton = [65, 260, 125, 310];
let foodGrabbed = false;
let healGrabbed = false;
let foodHeld = false;
let foodCount = 5;
let healCount = 1;
let points = 100;
let badFood;

//shop
let shopButtons = [
  [380, 40, 440, 80],
  [450, 40, 510, 80]
  ];

//minigame
let minigameOn = false;
let minigameStart = false;
let startTimer = 120;
let minigameTimer = 1000;
let score = 0;
let whackX = [123, 171, 135, 261, 279, 387, 435, 375];
let whackY = [117, 189, 279, 255, 135, 117, 279, 207];
let hole;

//-----------------------------------------------------------------------------------------------------

//load sprites

function preload() {

  for(let spriteCount = 0; spriteCount < petSprites.length; spriteCount++) {
    images[spriteCount] = loadImage('pet_sprites/' + petSprites[spriteCount] + ".png")
  }

   for(let gifCount = 0; gifCount < petAnimations.length; gifCount++) {
    animations[gifCount] = loadImage('pet_animations/' + petAnimations[gifCount] + ".gif")
  }

}

function setup() {
  createCanvas(600, 450);
  pixelFont = loadFont('font/pixel_font.ttf');
  hole = int(random(0, 7));
  console.log(hole)

  //-----------------------------------------------------------------------------------------------------

  //get variables

  if (getItem("happiness")==null) {happiness = 100;}
  else {happiness = getItem("happiness");}

  if (getItem("hunger")==null) {hunger = 100;}
  else {hunger = getItem("hunger");}

  if (getItem("energy")==null) {energy = 100;}
  else {energy = getItem("energy");}

  if (getItem("health")==null) {health = 100;}
  else {health = getItem("health");}

  if (getItem("petResting")==null) {petResting = 100;}
  else {petResting = getItem("petResting");}

  if (getItem("petSick")==null) {hpetSick = false;}
  else {petSick = getItem("petSick");}

  if (getItem("petDead")==null) {petDead = false;}
  else {petDead = getItem("petDead");}

  if (getItem("petTooSad")==null) {petTooSad = false;}
  else {petTooSad = getItem("petTooSad");}

  if (getItem("petHungry")==null) {petHungry = true;}
  else {petHungry = getItem("petHungry");}

  if (getItem("points")==null) {points = 0;}
  else {points = getItem("points");}

  if (getItem("foodCount")==null) {foodCount = 5;}
  else {foodCount = getItem("foodCount");}

  if (getItem("healCount")==null) {healCount = 1;}
  else {healCount = getItem("healCount");}
  

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

  //Buy

  if(mouseButton == LEFT && points >= 8 && mouseX >= shopButtons[0][0] && mouseY >= shopButtons[0][1]
     && mouseX <= shopButtons[0][2] && mouseY <= shopButtons[0][3]) {
      foodCount++;
      points = points - 8;
  }
  else if(mouseButton == LEFT && points >= 20 && mouseX >= shopButtons[1][0] && mouseY >= shopButtons[1][1]
     && mouseX <= shopButtons[1][2] && mouseY <= shopButtons[1][3]) {
      healCount++;
      points = points - 20;
  }
 
 //-----------------------------------------------------------------------------------------------------

  //Access minigame 

  if (mouseButton == LEFT && inventoryUp == true && mouseX >= minigameButton[0] && mouseY >= minigameButton[1]
     && mouseX <= minigameButton[2] && mouseY <= minigameButton[3]) {
      minigameOn = true;
     }


  //-----------------------------------------------------------------------------------------------------

  //grab&drop healing

  if(mouseButton == LEFT && inventoryUp == true && healCount > 0 && mouseX >= healButton[0] && mouseY >= healButton[1]
     && mouseX <= healButton[2] && mouseY <= healButton[3]) {
    healGrabbed = true;
  }

  if(mouseButton == LEFT && petSick == true && healGrabbed == true && mouseX >= petX - 30 && mouseY >= petY - 30
     && mouseX <= petX + 30 && mouseY <= petY + 30) {
    healGrabbed = false;
    healCount = healCount - 1;
    badFood = int(random(1, 10)); petSick = false; healthDrain = -0.06; petEating = true; petHungry = true;
  }
  else if (mouseButton == RIGHT) {
    healGrabbed = false;
  }
  //-----------------------------------------------------------------------------------------------------

  //grab&drop food

   if(mouseButton == LEFT && inventoryUp == true && foodCount > 0 && mouseX >= foodButton[0] && mouseY >= foodButton[1]
     && mouseX <= foodButton[2] && mouseY <= foodButton[3]) {
    foodGrabbed = true; badFood = int(random(0, 10));
  }

  if(mouseButton == LEFT && petHungry == true && hunger <= 70 && foodGrabbed == true && mouseX >= petX - 30 && mouseY >= petY - 30
     && mouseX <= petX + 30 && mouseY <= petY + 30) {
    foodGrabbed = false;
    foodCount = foodCount - 1;
    hunger = hunger + 30; petEating = true;
  }
  else if (mouseButton == LEFT && petHungry == true && hunger >= 70 && foodGrabbed == true && mouseX >= petX - 30 && mouseY >= petY - 30
     && mouseX <= petX + 30 && mouseY <= petY + 30) {
    foodGrabbed = false;
    foodCount = foodCount - 1;
    hunger = hunger + 30 - (hunger - 70); petEating = true;
  }
  else if (mouseButton == RIGHT) {
    foodGrabbed = false;
  }

  //-----------------------------------------------------------------------------------------------------

  //WHACK!

  if(mouseButton == LEFT && minigameStart == true && mouseX >= whackX[hole] && mouseY >= whackY[hole]
     && mouseX <= whackX[hole] + 60 && mouseY <= whackY[hole] + 66) {
    score ++; points++; hole = int(random(0, 7));
  }

  //-----------------------------------------------------------------------------------------------------

  //reset
  if (mouseButton == LEFT && mouseX >= 580 && mouseY >= 430) {
    happiness = 100;
    hunger = 100;
    health = 100;
    energy = 100;
    hungerDrain = 0.02;
    happinessDrain = 0.02;
    energyDrain = 0.01;
    healthDrain = -0.06;
    petDead = false;
    petTooSad = false;
    petSick = false;
    petResting = false;
    petHungry = true;
    points = 0;
    foodCount = 5;
    healCount = 1;
  }
}

//-----------------------------------------------------------------------------------------------------

// background

function draw() {
  background(200);
  image(images[11], 0, 0, 600, 450);
  fill(255);
  textSize(10);
  strokeWeight(0);
  textFont(pixelFont);
  //-----------------------------------------------------------------------------------------------------

  //Pet

  //Pet animations
  if (petDead == false && petResting == false && petEating == false && petSick == false) {
    circle(petX, petY, 40);
   image(animations[1], petX - 175, petY - 120);
  }
  else if (petDead == true && petTooSad == false) {
    image(images[0], petX - 175, petY - 120);
  }
  else if (petSick == true && petDead == false) {
    image(animations[3], petX - 175, petY - 120);
    petHungry = false; healthDrain = 0.06;
  }
  else if (petEating == true && petDead == false) {
    image(animations[0], petX - 175, petY - 120);
    eatTime--;
  }
  else if (petTooSad == true) {
    image(animations[2], petX - 175, petY - 320);
    
  }
  else if (petResting == true) {
  image(animations[4], petX - 175, petY - 120);
  }

  if (eatTime <= 0) {
    petEating = false;
    eatTime = 100;
  }

  //-----------------------------------------------------------------------------------------------------

  //Inventory UI

  if (inventoryUp == false) {
    fill(120);
    rect(0, 257, 28, 126);
    fill(200);
    rect(0, 260, 25, 120);
  }
   else if (inventoryUp == true) {
    fill(120);
    rect(0, 257, 133, 126);
    fill(200);
    rect(0, 260, 130, 120);
    image(images[6], 20, 260, 45, 45);
    image(images[18], 35, 300, 60, 60);
    image(images[21], 65, 255, 60, 60);
    fill(0);
    text(foodCount, 38, 287);
    text(healCount, 91, 287)
  }

  fill(0);
  rect(0, 247, 18, 146);
  fill(60);
  rect(0, 250, 15, 140);

  if(foodGrabbed == true) {
    image(images[5], mouseX - 120, mouseY - 110);
  }

  if(healGrabbed == true) {
    image(images[20], mouseX - 30, mouseY - 30, 60, 60);
  }

  //-----------------------------------------------------------------------------------------------------

  //shop UI

  textSize(15);
  fill(120);
  rect(350, 0, 190, 110);
  fill(180);
  rect(355, 0, 180, 105);
  fill(220);
  rect(360, 0, 170, 100);
  fill(0)
  text("Item shop", 380, 20);
  fill(120);
  rect(375, 35, 140, 50);
  fill(80);
  rect(shopButtons[0][0], shopButtons[0][1], shopButtons[0][2] - shopButtons[0][0], shopButtons[0][3] - shopButtons[0][1]);
  rect(shopButtons[1][0], shopButtons[1][1], shopButtons[1][2] - shopButtons[1][0], shopButtons[1][3] - shopButtons[1][1]);
  image(images[5], 305, -30, 240, 180);
  image(images[20], 450, 30, 60, 60);
  textSize(10);
  fill(0);
  text("20P", 470, 97);
  text("8P", 400, 97);

  //-----------------------------------------------------------------------------------------------------


  //Status bars UI

  textSize(15);
  fill(120);
  rect(0, 0, 200, 170);
  fill(180);
  rect(0, 0, 195, 165);
  fill(220);
  rect(0, 0, 190, 160);
  fill(0)
  text("Points:" + points, 40, 150);

  //Hunger
  if(hunger > 50) {
    image(images[7], 5, 5, 35, 35);
  }
  else if (hunger > 20) {
    image(images[9], 5, 5, 35, 35);
  }
  else {
    image(images[8], 5, 5, 35, 35);
  }

  fill(0);
  textSize(10);
  text("Hunger", 50, 15);
  rect(47, 17, 106, 16);
  fill(255);
  rect(50, 20, 100, 10);
  fill(250, 100 ,0);
  rect(50, 20, hunger, 10);

  hunger = hunger - hungerDrain;

  if (hunger <= 50) {
    petHungry = true;
  }

  //Happiness
  if(happiness > 50) {
    image(images[12], 5, 35, 35, 35);
  }
  else if (happiness > 20) {
    image(images[14], 5, 35, 35, 35);
  }
  else {
    image(images[13], 5, 35, 35, 35);
  }

  fill(0);
  text("Happiness", 50, 45);
  rect(47, 47, 106, 16);
  fill(255);
  rect(50, 50, 100, 10);
  fill(250, 250, 0);
  rect(50, 50, happiness, 10);
  happiness = happiness - happinessDrain;
  if (happiness > 100) {
    happiness = 100;
  }
  if (happiness <= 0) {
    happiness = 0;
  }

  //Energy

  if(energy > 50) {
    image(images[1], 5, 65, 35, 35);
  }
  else if (energy > 20) {
    image(images[3], 5, 65, 35, 35);
  }
  else if (energy > 0) {
    image(images[2], 5, 65, 35, 35);
  }
  else {
    image(images[4], 5, 65, 35, 35);
  }

  fill(0);
  text("Energy", 50, 75);
  rect(47, 77, 106, 16);
  fill(255);
  rect(50, 80, 100, 10);
  fill(50, 250, 80);
  rect(50, 80, energy, 10);

  energy = energy - energyDrain;

  if (energy <= 0) {
    energy = 0;
  }

  if (energy <= 0) {
    petResting = true;
  }

  if (petResting == true) {
    sleepTime = sleepTime - 1;
    energyDrain = 0;
    hungerDrain = 0;
    happinessDrain = 0;
    petHungry = false;

  }

  if (sleepTime <= 0) {
    energy = 100;
    sleepTime = 1000;
    petResting = false;
    hungerDrain = 0.02;
    happinessDrain = 0.02;
    energyDrain = 0.03;
    petHungry = true;
  }

  //Health
  if(health > 50) {
    image(images[10], 5, 95, 35, 35);
  }
  else if (health > 20) {
    image(images[16], 5, 95, 35, 35);
  }
  else {
    image(images[15], 5, 95, 35, 35);
  }

  if (badFood <= 0 && petEating == true) {
    petSick = true;
  }

  if (health >= 100) {
    health = 100;
  }

  health = health - healthDrain

  fill(0);
  text("Health", 50, 105);
  rect(47, 107, 106, 16);
  fill(255);
  rect(50, 110, 100, 10);
  fill(250, 50, 50);
  rect(50, 110, health, 10);

  //Dead
  if (hunger <= 0 && happiness != 0 || health <= 0 && happiness != 0) {
    petDead = true; hungerDrain = 0; energyDrain = 0; healthDrain = 0; happinessDrain = 0;
  }
  else if (happiness == 0) {
    petDead = true; hunger = 0; energy = 0; health = 0; happiness = 0; petTooSad = true;
  }
  

  //-----------------------------------------------------------------------------------------------------

  //minigame

  //select game

  if (minigameOn == true && minigameTimer >= 0) {
    fill(0, 0, 0, 155);
    circle(200, 200, 2000);
    image(images[17], 0, 0);
    fill(255, 0, 0);
    strokeWeight(0);
    rect(230, 30, 20, 20);
    rect(280, 30, 20, 20);
    fill(250, 200, 0);
    rect(330, 30, 20, 20);
    fill(255);
    textSize(20);
    text("Score:" + score, 240, 400);
    rect(220, 410, minigameTimer / 5, 20);
    fill(250, 200, 0);
    startTimer--;
  }

  //countdown

  if (startTimer <= 80) {
    rect(280, 30, 20, 20);
  }

  if (startTimer <= 40) {
    rect(230, 30, 20, 20);
  }

  if (startTimer <= 0) {
    fill(0, 255, 50);
    rect(230, 30, 20, 20);
    rect(280, 30, 20, 20);
    rect(330, 30, 20, 20);
    minigameStart = true;
    minigameTimer--;

    if (minigameTimer <= 0) {
      minigameOn = false;
      minigameStart = false;
      startTimer = 120;
      minigameTimer = 1000;
      happiness = happiness + 50;
      energy = energy - 30;
      score = 0
    }

    //whackable
    if (minigameStart == true) {
    image(images[19], whackX[hole] - 63, whackY[hole] - 51);
  }
}

  //-----------------------------------------------------------------------------------------------------

  //store variables
  storeItem("happiness", happiness);
  storeItem("hunger", hunger);
  storeItem("energy", energy);
  storeItem("health", health);
  storeItem("petResting", petResting);
  storeItem("petSick", petSick);
  storeItem("petDead", petDead);
  storeItem("petTooSad", petTooSad);
  storeItem("petHungry", petHungry);
  storeItem("points", points);
  storeItem("foodCount", foodCount);
  storeItem("healCount", healCount);

} 

