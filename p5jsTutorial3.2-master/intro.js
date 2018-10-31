var imageIntroTitle;
var imageClicktoStart;

function preloadIntro()
{
	imageIntroTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleIntro.png');	
	imageClicktoStart = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonClickToStart.png')
}

function setupIntro()
{

}

function drawIntro()
{
	background(125,125,125)

	image(imageIntroTitle,400,50);
	image(imageClicktoStart,300,200)

	if (mouseIsPressed)
	{
		canvasID = -1;
	}
}
