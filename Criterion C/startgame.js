var easy;
var hard;
var medium;
var bg1;

var easyx;
var easyy;
var mediumx;
var mediumy;
var hardx;
var hardy; 

function preloadStartGame()
{
	easy = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/easy.png')
	hard = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/hard.png')
	medium = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/med.png')
	bg1 = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/mode.png')
}

function setupStartGame()
{

	easyx = 625-(113/2);
	easyy = 200;
	mediumx = 625-(155/2);
	mediumy = 300;
	hardx = 625-(121/2);
	hardy = 400;
}

function drawStartGame()
{
	background(bg1)

	image(easy,easyx,easyy);

	if (mouseX > easyx && mouseX < easyx + 113 && mouseY > easyy && mouseY < easyy+67 && mouseIsPressed)
	{
		canvasID = -3;
	}

	image(medium,mediumx,mediumy);
	if (mouseX > mediumx && mouseX < mediumx+155 && mouseY > mediumy && mouseY < mediumy+67 && mouseIsPressed)
	{
		canvasID = -4;
	}

	image(hard,hardx,hardy);
	if (mouseX > hardx && mouseX < hardx+121 && mouseY > hardy && mouseY < hardy+67 && mouseIsPressed)
	{
		canvasID = -5;
	}
}
