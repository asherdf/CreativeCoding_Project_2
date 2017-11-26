class Annual{
	constructor(){
		this.autumn = loadStrings('Words/Autumn.txt');
		this.spring = loadStrings('Words/Spring.txt');
		this.summer = loadStrings('Words/Summer.txt');
		this.winter = loadStrings('Words/Winter.txt');
		this.angle = 0;
		this.quadrant = PI*angle;
		this.season = 1;

		textSize(32);
	}

	//textSize(32);

	season(){
		//This is our quadrant system (I know, weird)
		//	3	|	4
		//-------------
		//	2	|	1
		//Earth is in quadrant 1: AUTUMN
		if (quadrant > 0 && (quadrant < (PI/2))){
			this.season = 1;
		}
		// //Earth is in quadrant 2: WINTER
		// else if ((quadrant > (PI/2)) && (quadrant < PI)){
		// 	this.season = 2;
		// }
		// //Earth is in quadrant 3: SPRING
		// else if ((quadrant > PI) && (quadrant < (3*PI/2))){
		// 	this.season = 3;
		// }
		// //Earth is in quadrant 4: SUMMER
		// else if ((quadrant > (3*PI/2)) && (quadrant < (TWO_PI))){
		// 	this.season = 4;
		// }
	}

	words(){
		// if (this.season == 1){
			var ind = floor(random(this.autumn.length));
			fill(255, 0, 0);
			text(this.autumn[ind], random((1/2*width), width),
							  random((1/2*height), height),
							  80, 80);
		// }
		// if (this.season == 2){
		// 	var ind = floor(random(winter.length));
		// 	fill(255);
		// 	text(winter[ind], random(1/2*width),
		// 					  random((1/2*height), height),
		// 					  80, 80);
		// }
		// if (this.season == 3){
		// 	var ind = floor(random(spring.length));
		// 	fill(0,255,0);
		// 	text(spring[ind], random((1/2*width)),
		// 					  random((1/2*height)),
		// 					  80, 80);
		// }
		// if (this.season == 4){
		// 	var ind = floor(random(summer.length));
		// 	fill(0,0,255);
		// 	text(summer[ind], random((1/2*width), width),
		// 					  random((1/2*height)),
		// 					  80, 80);
		// }
	}

	// if (quadrant > 0 && (quadrant < (PI/2))){
	// 		var ind = floor(random(autumn.length));
	// 		fill(255, 0, 0);
	// 		textSize(32);
	// 		text(autumn[ind], random((1/2*width), width),
	// 						  random((1/2*height), height),
	// 						  80, 80);
	// 	}
	// 	//Earth is in quadrant 2: WINTER
	// 	else if ((quadrant > (PI/2)) && (quadrant < PI)){
	// 		var ind = floor(random(winter.length));
	// 		fill(255);
	// 		textSize(32);
	// 		text(winter[ind], random(1/2*width),
	// 						  random((1/2*height), height),
	// 						  80, 80);
	// 	}
	// 	//Earth is in quadrant 3: SPRING
	// 	else if ((quadrant > PI) && (quadrant < (3*PI/2))){
	// 		var ind = floor(random(spring.length));
	// 		fill(0,255,0);
	// 		textSize(32);
	// 		text(spring[ind], random((1/2*width)),
	// 						  random((1/2*height)),
	// 						  80, 80);
	// 	}
	// 	//Earth is in quadrant 4: SUMMER
	// 	else if ((quadrant > (3*PI/2)) && (quadrant < (TWO_PI))){
	// 		var ind = floor(random(summer.length));
	// 		fill(0,0,255);
	// 		textSize(32);
	// 		text(summer[ind], random((1/2*width), width),
	// 						  random((1/2*height)),
	// 						  80, 80);
	// 	}
}