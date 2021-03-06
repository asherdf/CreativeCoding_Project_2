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


var syn = [];	//synonyms for the seasons
var stars = [];

var sun;
var earth;
var autumn;
var spring;
var summer;
var winter;

var angle = 0;

//load all the images and text before running the program
//---------------------------------------------------------------
function preload(){
	sun = loadImage("Images/Sun/Suntrace.png");
	earth = loadImage("Images/Earth/Earth_1.png");

	autumn = loadStrings('Words/Autumn.txt');
	spring = loadStrings('Words/Spring.txt');
	summer = loadStrings('Words/Summer.txt');
	winter = loadStrings('Words/Winter.txt');

	fontAut = loadFont('Fonts/Fall/mistis-fonts_autumn-moon/Autumn_Moon.ttf');
	fontSpr = loadFont('Fonts/Spring/nebulo/Nebulo_Demo.ttf');
	fontSum = loadFont('Fonts/Summer/Mojito-in-june/Mojito_in_June.ttf');
	fontWin = loadFont('Fonts/Winter/hultog-snowdrift/Hultog_Snowdrift.ttf');
}

//---------------------------------------------------------------
function setup() { 
	createCanvas(600,600);
	frameRate(10);
	
	//create an array of words for each season
	for (var i = 0; i < 10; i++){
		syn[i] = new Annual(autumn, spring, summer, winter,
							fontAut, fontSpr, fontSum, fontWin);
	}

	//create the array of stars
	for (var i = 0; i < 150; i++){
		stars[i] = new Star();
	}
}

//---------------------------------------------------------------
function draw() {
	background(0);

	//stars
	for (var i = 0; i < stars.length; i++){	
		stars[i].display();
		stars[i].glow();
		stars[i].shine();
	}

	for (var i = 0; i < syn.length; i++){
		syn[i].yearly();
		syn[i].words();
	}
	
	imageMode(CENTER);
	image(sun, (width/2),(height/2));
	
	push();
		translate(width/2,height/2);
		var quadrant = PI*angle
		rotate(quadrant);
	
		planetColor()

		image(earth, (width/2)-25,0, 50,50);	//scaled down

		//reset the angle counter
		if (quadrant < TWO_PI){
			angle += 0.01;
		} else { angle = 0; }		
	pop();
}

//---------------------------------------------------------------
function planetColor() {

	var quadrant = PI*angle

	var autCol = color(232,186,55);
	var winCol = color(79,231,255);
	var sprCol = color(55,232,99);
	var sumCol = color(219,255,73);

	//Earth is in quadrant 1: AUTUMN
	if (quadrant > 0 && (quadrant < (PI/2))){
		tint(autCol);
	}
	//Earth is in quadrant 2: WINTER
	else if ((quadrant > (PI/2)) && (quadrant < PI)){
		tint(winCol);
	}
	//Earth is in quadrant 3: SPRING
	else if ((quadrant > PI) && (quadrant < (3*PI/2))){
		tint(sprCol);
	}
	//Earth is in quadrant 4: SUMMER
	else if ((quadrant > (3*PI/2)) && (quadrant < (TWO_PI))){
		tint(sumCol);
	}
}