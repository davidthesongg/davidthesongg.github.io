function setup() 
{
  createCanvas(600, 600);
  background(191, 179, 163);
}


function draw() 
{
  //body ~ referenced from Olivia
  fill(46, 43, 39);
  rect(160, 473, 60, 270, 30, 20, 5, 5);
  rect(380, 473, 60, 270, 20, 30, 5, 5);
  rect(170, 470, 260, 270, 40, 40, 5, 5);
  
  //neck
  fill(255, 238, 200)
  rect(275, 430, 50, 55, 20);
 
  //hair
  noStroke()
  fill(32, 19, 19);
  ellipse(300, 260, 280, 300);
  
  //head
  fill(255, 238, 219);
  ellipse(300, 300, 250, 300);
  
  //nose
  fill(250, 211, 145)
  ellipse(300, 335, 25, 50);
  
  //mouth
  fill(255, 102, 102);
  arc(300, 380, 49, 35, 0, PI);
  
  //left eye
  fill(255, 255, 255)
  ellipse(250, 300, 50, 25);
  fill(0, 0, 0)
  ellipse(250, 300, 20, 20);
  
  //right eye
  fill(255, 255, 255)
  ellipse(350, 300, 50, 25);
  fill(0, 0, 0)
  ellipse(350, 300, 20, 20);
  
  //eyebrow
  stroke(21, 19, 19);
  strokeWeight(3);
  noFill();
  arc(250, 275, 45, 15, PI, 6, OPEN);
  arc(350, 275, 45, 15, 6.5, 3, OPEN);
  
  //bangs
  noStroke()
  fill(32, 19, 19);
  arc(350, 175, 100, 90, 0, PI + QUARTER_PI, CHORD);
  arc(240, 140, 140, 148, 0, 0.75 * PI);
}
