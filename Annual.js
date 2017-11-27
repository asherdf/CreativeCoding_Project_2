class Annual{
	constructor(autumnString, springString,
				summerString, winterString,
				autumnFont, springFont,
				summerFont, winterFont){
		this.autumn = autumnString;
		this.spring = springString;
		this.summer = summerString;
		this.winter = winterString;

		this.angle = 0;
		this.quadrant = PI*angle;
		this.season = 1;

		//Text locations based on their quadrants
		this.xAut = floor(random((1/2*width), width));		//Autumn
		this.yAut = floor(random((1/2*height), height));
		this.xSpr = floor(random((1/2*width)));				//Spring
		this.ySpr = floor(random((1/2*height)));
		this.xSum = floor(random((1/2*width), width));		//Summer
		this.ySum = floor(random((1/2*height)));
		this.xWin = floor(random(1/2*width));				//Winter
		this.yWin = floor(random((1/2*height), height));

		this.autWord = random(this.autumn.length);
		this.sprWord = 0;
		this.sumWord = 0;
		this.winWord = 0;

		textSize(32);
		this.autumnType = autumnFont;
		this.springType = springFont;
		this.summerType = summerFont;
		this.winterType = winterFont;
	}

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
			textFont(this.summerType);
		}
	}

	words(){
		// if (this.season == 1){
			
			var ind = floor(random(this.autumn.length));
			fill(255, 0, 0);
			textFont(this.autumnType);
			// text(this.autumn, 
			// 	 this.xAut,this.yAut,
			// 	 80,80);
			text(this.autumn[ind], 
				 this.xAut,this.yAut,
				 80,80);
		// }
		// if (this.season == 2){
			var ind = floor(random(this.winter.length));
			fill(255);
			textFont(this.winterType);
			// text(this.winter,
			// 	 this.xWin,this.yWin,
			// 	 80,80);
			text(this.winter[ind],
				 this.xWin,this.yWin,
				 80,80);
		// }
		// if (this.season == 3){
			var ind = floor(random(this.spring.length));
			fill(0,255,0);
			textFont(this.springType);
			text(this.spring[ind], 
				 this.xSpr,this.ySpr,
				 80,80);
		// }
		// if (this.season == 4){
			var ind = floor(random(this.summer.length));
			fill(0,0,255);
			textFont(this.summerType);
			text(this.summer[ind], 
				 this.xSum,this.ySum,
				 80, 80);
		// }
	}
}