// SID 490054965   Name: Yizun Zhang
// Inspiration by William Kolomyjec from
// http://recodeproject.com/artwork/v2n4seasons-greetings

// By using simple rectangular with noise sin and cos function,the different layers of petal are generated randomly to look like a structured flower.
// The title of original artwork named 'Season Greetings', which inspire me to use gradient colors to exhibit a strong visual impact of 'seasons' with various colors and shapes of a flower, so as to generate surprising and unpredictable outcomes.

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CORNERS);
  noLoop();
  angleMode(RADIANS);
}

function draw() {
  background(255);
  drawFlower();
}

function mousePressed(){
  translate(-width/2, -height/2);
  //move bake to the center of the canvas 
  draw();
}

function drawFlower(){
  let angle = 0;
  let num = random(3, 5);
  
//define a series of gradient color.
  let c1 = [238, 255, 156, 221, 167, 225];
  let c2 = [255, 255, 95, 195, 109, 113];
  let c3 = [131, 182, 164, 251, 212, 255];
  let c4 = [255, 201, 175, 255, 189, 191];
  let c5 = [151,251,150,199,240,212];
  let c6 = [121,255,159,224,12,0];
  let c7 = [237,255,66,237,100,188];
  let palette = [c1, c2, c3, c4, c5, c6, c7];
  let pickNum = floor(random(0, 7));

  translate(width / 2, height / 2);
  //create first loop for every small signle rect.
  for (let i = 0; i < 260; i++) {
    push();//  star a new drawing state
  
    //rotate to get a whole circle
    rotate(angle);
    //create second loop for diffrent layers of the flower.
    for (let j = 0; j < 6; j++) {
		//use Map and Array to get the accurate color 
      let red = map(j, 0, 5, palette[pickNum][0], palette[pickNum][1]);
      let green = map(j, 0, 5, palette[pickNum][2], palette[pickNum][3]);
      let blue = map(j, 0, 5, palette[pickNum][4], palette[pickNum][5]);
      fill(red, green, blue);

      // draw every sigle rectangle based on the noise sin and cos.
      rect(0, -(j + 1) * 5 - 40 * noise(cos(-angle + j) * 2), 6, -100 -(40 + (4 - j) * 35) * noise(sin(angle + j) * num + j/2));
    }
    pop(); //     Restore original state

    angle = angle + TWO_PI / 260.0;
  }
}
