var canvasID;
var bgmain;
var rulesbutton;
var startgamebutton;


function preloadMainMenu()
{
	bgmain = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/menu.png')
	rulesbutton = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/rules.png')
	startgamebutton = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/play.png')
}

function setupMainMenu()
{

}

function drawMainMenu()
{
	background(bgmain)

	image(rulesbutton,550,200,150,60)
	image(startgamebutton,470,300,300,200)

	if (mouseX > 550 && mouseX < 550 + 150 && mouseY > 200 && mouseY < 200+60 && mouseIsPressed)
	{
		canvasID = -7;
	}

	if (mouseX > 470 && mouseX < 470+300 && mouseY > 300 && mouseY < 300+200 && mouseIsPressed)
	{
		canvasID = -2;
	}



}

