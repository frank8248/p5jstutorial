var canvasID;
var bgcom;
var buttonback;

function preloadMedium()
{
	bgcom = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/coming.png')
	buttonback = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/button_back.png')
}

function setupMedium()
{
	buttonx = 0
	buttony = 0
	
}

function drawMedium()
{
	background(bgcom)
	
	image(buttonback,buttonx,buttony)

	if (mouseX > buttonx && mouseX < buttonx + 117 && mouseY > buttony && mouseY < buttonx+67 && mouseIsPressed)
	{
		canvasID = -2;
	}

}