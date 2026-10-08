let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let colorButtons = 0; colorButtons < kleuren.length; colorButtons++

function mijnFunctie() {
  console.log(kleuren[colorButtons] + 'Button werd geklikt!');
  background(255);
}

function setup() {
  createCanvas(800, 400);

   for(let colorButtons = 0; colorButtons < kleuren.length; colorButtons++) {
    let knop = createButton('Klik mij');
	  knop.position(100 + (colorButtons * 100), 200);
	  knop.style('background-color', kleuren[colorButtons], 255);
	  knop.style('font-size', '16px');
	  knop.mousePressed(mijnFunctie);
  }

}



function draw() {
  background(220);
  

}
