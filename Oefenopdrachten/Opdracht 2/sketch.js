function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(220);

  //Variable, cijfes en letters
  let x = 100;
  let greeting = "Hello World!";

  //Variable, begingetallen
  let a = 10;
  let b = 20;

  //Variable, basis sommen
  let optellen = a + b;
  let aftrekken = a - b;
  let vermenigvuldigen = a * b;
  let delen = a / b;

  //display
  text(x, 20, 20);
  text(greeting, 20, 60);

  text(optellen, 20, 80);
  text(aftrekken, 20, 100);
  text(vermenigvuldigen, 20, 120);
  text(delen, 20, 140);


}
