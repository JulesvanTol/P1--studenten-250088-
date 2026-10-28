let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let afbeeldingen = [];


function preload() {
	for (let i = 0; i < bestanden.length; i++) {
    afbeeldingen[i] = loadImage('assets/' + bestanden[i] + '.png')
	

	}
}

let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];

let animals = [];
let animalTracker = 5

//let colorButtons = [];
//let buttons = [];
//let bgColorTracker = 5;

function mijnFunctie() {

  animalTracker = this.bestandenIndex;

  /*console.log(this);

  buttons[bgColorTracker].show();

  bgColorTracker = this.kleurIndex;
  this.hide();

  //console.log(kleuren[this.elt.value] + 'Button werd geklikt!');
  //background(255);*/
}

function setup() {
  createCanvas(800, 600);


  for(let animal = 0; animal < bestanden.length; animal++) {
     
    let knop = createButton(bestanden[animal]);
	  knop.position(50 + (animal * 70), 400);
	  knop.style('background-color', 55);
	  knop.style('font-size', '16px');
	  knop.mousePressed(mijnFunctie);
    knop.bestandenIndex = animal;

  // let obj = {naam:'jules',kleur:'rood', 
  //    hallo: function(){ return 'Hi';} };
  // console.log(kleuren);
  // console.log(kleuren[2]);
  // console.log(obj);
  // console.log(obj.hallo());
  //console.log(buttons);

   /*for(let colorButtons = 0; colorButtons < kleuren.length; colorButtons++) {
    let knop = createButton('Klik mij');
	  knop.position(100 + (colorButtons * 100), 200);
	  knop.style('background-color', kleuren[colorButtons], 255);
	  knop.style('font-size', '16px');
	  knop.mousePressed(mijnFunctie);
    knop.kleurIndex = colorButtons; // om bij te houden welk nummer deze knop heeft+++++++++
    buttons[colorButtons] = knop; */
  }

}



function draw() {
  background(200);
  

  image(afbeeldingen[animalTracker], 300, 50, 200, 200);
  
  text(animalTracker, 20, 20);

}
