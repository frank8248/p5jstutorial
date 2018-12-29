var quit;
var again;
var bg2;

function preloadWin()
{
	bg2 = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/win.png');
	again = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/playagain.png');
	quit = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/quit.png');
	
}

function setupWin()
{
	againx = 200
	againy = 600
	quitx = 900
	quity = 600


}

function drawWin()
{
	background(bg2)

	image(again,againx,againy)
	if (mouseX > againx && mouseX < againx + 160 && mouseY > quity && mouseY < againy+40 && mouseIsPressed)
	{
		canvasID = -3;
	}
	
	image(quit,quitx,quity)
	if (mouseX > quitx && mouseX < quitx+90 && mouseY > quity && mouseY < quity+40 && mouseIsPressed)
	{
		canvasID = 0;
	}


	
}