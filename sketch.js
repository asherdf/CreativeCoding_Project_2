/*Project 2: Green: Collage and Manipulation

Text & Image

Study chapters P3 & P4 in the Generative Design textbook. Using
text and image, create a generative collage. According to the
Merriam-Webster Dictionary, generative means having the power or
function of generating, originating, producing, or reproducing.

This collage should change over time, by user input or animation.
This collage could be an interactive narrative non-linear or stop
motion piece that tells a story. Be creative and experimental with
this exercise.

Be expressive. You don't have to be literal. You are invited to be
abstract.

It must be done in P5.js. You must use images and you must use
text. Do not use sound. You may use graphics, but you are to 
mainly use image and text and to choreograph them over time.

I expect to see 2 pushes before the turning in the final. Submit
pull requests throughout.

Due Nov 27th

Requirements:

    maniuplation of time
    animation
    movement
    images
    text

Resources for fonts:

    Font Squirrel Make sure you also acquire the punctuation.

    Google Fonts*/


var synonyms = [];

var sun;
var earth;
var autumn;
var spring;
var summer;
var winter;

var angle = 0;


//load all the images and text before running the program
function preload(){
	sun = loadImage("Images/Sun_2.png");
	earth = loadImage("Images/Earth_1.jpg");

	// autumn = loadStrings('Words/Autumn.txt');
	// spring = loadStrings('Words/Spring.txt');
	// summer = loadStrings('Words/Summer.txt');
	// winter = loadStrings('Words/Winter.txt');
}

//---------------------------------------------------------------
function setup() { 
	createCanvas(600,600);
	frameRate(30)

	//create an array of words for each season
	for (var i = 0; i < 10; i++){
		synonyms[i] = new Annual();
	}
}

//---------------------------------------------------------------
function draw() {
	background(0);

	for(var i = 0; i < synonyms.length; i++){
		// synonyms[i].season();
		synonyms[i].words();
	}

	//season();
	
	imageMode(CENTER);
	image(sun, (width/2),(height/2));
	//image(earth, (width/2),0, 50,50);

	push();
		translate(width/2,height/2);
		var quadrant = PI*angle
		rotate(quadrant);
	
		planetColor()

		image(earth, (width/2),0, 50,50);	//scaled down

		//reset the angle counter
		if (quadrant < TWO_PI){
			angle += 0.01;
		} else { angle = 0; }		
	pop();
}

//----------------------------------------------------------------
function season() {

	var quadrant = PI*angle;
	textSize(32);
	//console.log(angle);
	
	//This is our quadrant system (I know, weird)
	//	3	|	4
	//-------------
	//	2	|	1
	//Earth is in quadrant 1: AUTUMN
	if (quadrant > 0 && (quadrant < (PI/2))){
		var ind = floor(random(autumn.length));
		fill(255, 0, 0);
		if (frameCount % 10 == 6){
			text(autumn[ind], random((1/2*width), width),
						  random((1/2*height), height),
						  80, 80);
		}
		
	}
	//Earth is in quadrant 2: WINTER
	else if ((quadrant > (PI/2)) && (quadrant < PI)){
		var ind = floor(random(winter.length));
		fill(255);
		text(winter[ind], random(1/2*width),
						  random((1/2*height), height),
						  80, 80);
	}
	//Earth is in quadrant 3: SPRING
	else if ((quadrant > PI) && (quadrant < (3*PI/2))){
		var ind = floor(random(spring.length));
		fill(0,255,0);
		text(spring[ind], random((1/2*width)),
						  random((1/2*height)),
						  80, 80);
	}
	//Earth is in quadrant 4: SUMMER
	else if ((quadrant > (3*PI/2)) && (quadrant < (TWO_PI))){
		var ind = floor(random(summer.length));
		fill(0,0,255);
		text(summer[ind], random((1/2*width), width),
						  random((1/2*height)),
						  80, 80);
	}

	// //Earth is in quadrant 4: AUTUMN
	// if ((quadrant > (3*PI/2)) && (quadrant < (TWO_PI))){

	// //Earth is in quadrant 3: WINTER
	// else if ((quadrant > PI) && (quadrant < (3*PI/2))){

	// //Earth is in quadrant 2: SPRING
	// else if ((quadrant > (PI/2)) && (quadrant < PI)){

	// //Earth is in quadrant 1: SUMMER
	// else if (quadrant > 0 && (quadrant < (PI/2))){

}

//---------------------------------------------------------------
function planetColor() {

	var quadrant = PI*angle

	//Earth is in quadrant 1: AUTUMN
	if (quadrant > 0 && (quadrant < (PI/2))){
		tint(255,151,96);
	}
	//Earth is in quadrant 2: WINTER
	else if ((quadrant > (PI/2)) && (quadrant < PI)){
		tint(96,253,255);
	}
	//Earth is in quadrant 3: SPRING
	else if ((quadrant > PI) && (quadrant < (3*PI/2))){
		tint(24,255,107);
	}
	//Earth is in quadrant 4: SUMMER
	else if ((quadrant > (3*PI/2)) && (quadrant < (TWO_PI))){
		tint(252,255,119);
	}

}