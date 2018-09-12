var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 410 && mouseX < 510 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(410,10,100,50);		
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(410,10,100,50);		
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Practice 1",415,40);




	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(200,200,255);
		stroke(51,70,190);
		textSize(16);
		text("Options",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		textSize(12);
		text("Options",button2X+30,button2Y+30);
	}


	fill(255,255,0);
	stroke(0,0,0);
	rect(200,200,100,100);

	if(mouseX > 200 && mouseX < 200+100 && mouseY > 200 && mouseY < 200+200)
	{
		fill(0,0,255);
		stroke(0,0,0);
		textsize(20);
		text("FK", 200+10, 200+10);
	}
	else
	{
		fill(255,255,255);
		stroke(204,0,0);
		textsize(10);
		text("CLICK ME!", 200+10,200+10);

	}

}