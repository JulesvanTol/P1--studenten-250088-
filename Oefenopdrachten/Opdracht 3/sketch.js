function setup() {

  createCanvas(400, 200);

  background(220);

  //score

  let score = random(0, 100);

  if (score >= 90) {
    fill(0, 205, 70), text("Uitstekend!", 20, 20);
  }
  else if (score <=89 && score >= 70) {
    fill(200, 200, 0), text("Goed gedaan!", 20, 20);
  }
  else if (score <=69 && score >= 50) {
    fill(200, 100, 0), text("Voldoende", 20, 20);
  }
  else if (score <=49) {
    fill(200, 0, 0), text("Onvoldoende", 20, 20);
  }

}
