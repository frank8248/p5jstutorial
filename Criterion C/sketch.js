var canvasID;
/*
  canvasID - 1 - intro
  canvasID - 2 - main menu
  canvasID - 3 - easy
  canvasID - 4 - medium
  canvasID - 5 - hard
*/

function preload()
{
	preloadIntro();
	preloadMainMenu();
	preloadmatchGame();
	preloadEasy();
	preloadMedium();
	preloadHard();
	preloadStartGame();
	preloadWin();
	preloadRules();
}

function setup()
{
	createCanvas(1250,700);

	setupIntro();
	setupMainMenu();
	setupEasy();
	setupMedium();
	setupHard();
	frameRate(30);
	matchGameSetupTables();
	setupStartGame();
	setupWin();
	setupRules();


	setupTimer();

	canvasID = 0;
}

function draw()
{

	if (canvasID == 0)
	{
		drawIntro();
	}

	if (canvasID == 1)
	{
		drawMainMenu();
	}

	if (canvasID == 2)
	{
		drawStartGame();
	}
	
	if (canvasID == 3)
	{
		drawmatchGame();
	}

	if (canvasID == 4)
	{
		drawMedium();
	}

	if (canvasID == 5)
	{
		drawHard();
	}


	if (canvasID == 6)
	{
		drawWin();
	}
	if (canvasID == 7)
	{
		drawRules();
	}
	

}

function mouseReleased()
{
	lock = false;


{
	if (canvasID == -0)
	{
		canvasID = 0

		;
	}
	if (canvasID == -1)
	{
		canvasID = 1;
	}
	if (canvasID == -2)
	{
		canvasID = 2;
	}
	if (canvasID == -3)
	{	
		canvasID = 3;
	}
	if (canvasID == -4)
	{
		canvasID = 4;
	}
	if (canvasID == -5)
	{
		canvasID = 5;
	}
	if (canvasID == -6)
	{
		canvasID = 6;
	}
	if (canvasID == -7)
	{
		canvasID = 7;
	}
	if (canvasID == -8)
	{
		canvasID = 8;
	}
}
}