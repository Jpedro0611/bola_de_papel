class Paper
{
	constructor(x,y)
	{
		var options = {
			'density':1.2,
			'friction':0,
			'restitution':0.3
		}
		this.x=x;
		this.y=y;
		this.PaperWidth=30;
		this.PaperHeight=30;
		
		
		this.image=loadImage("paper.png")
		

	}
	display(){
		
			push()
			rectMode(CENTER)
			fill(255)
			rect(this.x,this.y,this.PaperWidth, this.PaperHeight);
			pop()
			
	}

}