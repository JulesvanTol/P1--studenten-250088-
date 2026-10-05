const colors = [
  'crimson',
  'teal',
  'coral',
  'gold',
  'slateblue',
  'mediumseagreen',
  'tomato',
  'deepskyblue',
  'orchid',
  'darkorange'
];

const shapes = ['circle','rect'];

function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
    let randomColorFill = random(colors);
    let randomColorStroke = random(colors);
    let type = random(shapes);

    let x = random(0, width);
    let y = random(0, height);
    let w = random(20, 120);
    let h = random(10, 60);
    
    let stroke_weight = random(1,10);

    angleMode(DEGREES);
    let angle = random(1,360);

    fill(randomColorFill);
    stroke(randomColorStroke);
    strokeWeight(stroke_weight);

    switch (type) {
        case 'rect':
            rotate(angle);
            rect(x, y, w, h);   
            
            break;
    
        case 'circle':
            circle(x, y, w);
            break;
    }   

}
