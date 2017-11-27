class Star {
	constructor(){		
		this.x = random(width);
		this.y = random(height);
		this.starSize = random(0,5);
		this.opac = random(360);
		this.fade = 2;
		this.radius1 = 1;
		this.radius2 = random(7);
		this.angle = TWO_PI / 4;
		this.halfAngle = this.angle/2.0;
	}

	display(){		
		noStroke();
		fill(0,0,360, (this.opac-20));
		ellipse(this.x,this.y, this.starSize,this.starSize);
		
		fill(0,0,360, this.opac);
		ellipse(this.x,this.y, this.starSize / 2,this.starSize / 2);
	}

	glow(){ 
		this.opac = this.opac + this.fade;		
		if ((this.opac > 75) || (this.opac < 0)){
			this.fade = this.fade * (-1);
		}
	}

	//modified from https://p5js.org/examples/form-star.html
	shine(){		
		beginShape();
			for (var a = 0; a < TWO_PI; a += this.angle) {
			    var sx = this.x + cos(a) * this.radius2;
				var sy = this.y + sin(a) * this.radius2;
				vertex(sx, sy);
				sx = this.x + cos(a + this.halfAngle) * this.radius1;
				sy = this.y + sin(a + this.halfAngle) * this.radius1;
				vertex(sx, sy);
		  }
		endShape(CLOSE);
	}
}