var img;
var initials ='ds'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  bricks = loadImage('https://davidthesongg.github.io/brick_wall.jpeg');  
  bh_image_frame = loadImage('https://davidthesongg.github.io/image_frame.png');  
  cl_image_frame = loadImage('https://davidthesongg.github.io/cl_image_frame.png');  
  g_image_frame = loadImage('https://davidthesongg.github.io/g_image_frame.png');  
  p_image_frame = loadImage('https://davidthesongg.github.io/p_image_frame.png');  

  
  
  blue_hue = loadImage('https://davidthesongg.github.io/blue_hue.jpg');  
  city_lights = loadImage('https://davidthesongg.github.io/city_lights.jpg');
  glare = loadImage('https://davidthesongg.github.io/glare.jpg');
  pretty = loadImage('https://davidthesongg.github.io/pretty.jpg');
  
  
  pipe = loadImage('https://davidthesongg.github.io/pipe.png');
  pipe_corner = loadImage('https://davidthesongg.github.io/pipe_corner.png');
  vert_pipe = loadImage('https://davidthesongg.github.io/vertical_pipe.png');
  three_way = loadImage('https://davidthesongg.github.io/three_way_pipe.png');
}

function setup() {
  createCanvas(800, 600);  // canvas size
  background(screenbg);   // use our background screen color
  image(bricks, 0, 0, 800, 600);

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

   if (toolChoice == '1') //draw frame for blue_hue
   {
      image(bh_image_frame, mouseX, mouseY, 180, 200);
   } 
   
   else if (toolChoice == '2') // draw blue_hue
   {
      image(blue_hue, mouseX, mouseY, 140, 160);
   } 
   
   
   
   
   else if (toolChoice == '3')  //draw frame for city_lights
   {
      image(cl_image_frame, mouseX, mouseY, 250, 280);
   }
   
   else if (toolChoice == '4')  // draw city_lights
   {
      image(city_lights, mouseX, mouseY, 220, 250);
   }
   
   
   
   
   
   else if (toolChoice == '5')  //draw frame for glare
   {
      image(g_image_frame, mouseX, mouseY, 200, 230);
   }
   
   else if (toolChoice == '6')  // draw glare
   {
      image(glare, mouseX, mouseY, 170, 200);
   }
   
   
  
  
   else if (toolChoice == '7')  //draw frame for pretty
   {
      image(p_image_frame, mouseX, mouseY, 400, 450);
   }
   
   else if (toolChoice == '8')  // draw pretty
   {
      image(pretty, mouseX, mouseY, 370, 420);
   }
   
   
   
   else if (toolChoice == '9')  // draw random rectangles
   {
      stroke(0, 0);
      fill(random(255), random(255), random(255), random(255));
      rect(mouseX, mouseY, random(100), random(100));
   }
   
   else if (toolChoice == '-')  // draw horizontal pipe
   {
      image(pipe, mouseX, mouseY, 300, 100);
   }
   
   else if (toolChoice == '=')  // draw pipe corner connector
   {
      image(pipe_corner, mouseX, mouseY, 250, 250);
   }
   
   else if (toolChoice == ']')  // draw vertical pipe
   {
      image(vert_pipe, mouseX, mouseY, 100, 300);
   }
   
   else if (toolChoice == '[')  // draw three way pipe connector
   {
      image(three_way, mouseX, mouseY, 400, 200);
   }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'c' || key == 'C') {
    background(screenbg); // set the screen back to the background color
    image(bricks, 0, 0, 800, 600);
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
