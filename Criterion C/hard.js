var canvasID;
var bgcom;
var buttonback;

function preloadHard()
{
	bgcom = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/coming.png')
	buttonback = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/button_back.png')
}

function setupHard()
{
	buttonx = 0
	buttony = 0
	
}

function drawHard()
{
	background(bgcom)
	
	image(buttonback,buttonx,buttony)

	if (mouseX > buttonx && mouseX < buttonx + 117 && mouseY > buttony && mouseY < buttonx+67 && mouseIsPressed)
	{
		canvasID = -2;
	}

}