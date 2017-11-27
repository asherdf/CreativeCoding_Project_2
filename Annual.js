class Annual{
	constructor(autumnString, springString,
				summerString, winterString){
		this.autumn = autumnString;
		this.spring = springString;
		this.summer = summerString;
		this.winter = winterString;
		this.angle = 0;
		this.quadrant = PI*angle;
		this.season = 1;

		textSize(32);
	}

	//textSize(32);

	yearly(){
		//This is our quadrant system (I know, weird)
		//	3	|	4
		//-------------
		//	2	|	1
		//Earth is in quadrant 1: AUTUMN
		if ((this.quadrant > 0) && (this.quadrant < (PI/2))){
			this.season = 1;
		}
		//Earth is in quadrant 2: WINTER
		else if ((this.quadrant > (PI/2)) && (this.quadrant < PI)){
			this.season = 2;
		}
		//Earth is in quadrant 3: SPRING
		else if ((this.quadrant > PI) && (this.quadrant < (3*PI/2))){
			this.season = 3;
		}
		//Earth is in quadrant 4: SUMMER
		else if ((this.quadrant > (3*PI/2)) && (this.quadrant < (TWO_PI))){
			this.season = 4;
		}
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
			var ind = floor(random(this.winter.length));
			fill(255);
			text(this.winter[ind], random(1/2*width),
							  random((1/2*height), height),
							  80, 80);
		// }
		// if (this.season == 3){
			var ind = floor(random(this.spring.length));
			fill(0,255,0);
			text(this.spring[ind], random((1/2*width)),
							  random((1/2*height)),
							  80, 80);
		// }
		// if (this.season == 4){
			var ind = floor(random(this.summer.length));
			fill(0,0,255);
			text(this.summer[ind], random((1/2*width), width),
							  random((1/2*height)),
							  80, 80);
		// }
	}
}