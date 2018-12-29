
var bg;

function preloadIntro()
{
	bg = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/intro.png');
}

function setupIntro()
{

}

function drawIntro()
{
	background(bg)

	if (mouseIsPressed)
	{
		canvasID = -1;
	}

}