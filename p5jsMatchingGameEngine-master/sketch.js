var canvasID;


function preload()
{

}

function setup()
{
	createCanvas(1000,800);

	frameRate(30);
	matchGameSetupTables();


	canvasID = 1;
}

function draw()
{
	background(0,0,0);


	if (canvasID == 1)
	{
		matchGameDraw();
	}
	if (canvasID == 2)
	{
		fill(255,255,255);
		textSize(30);
		text("YOU WIN!",50,50);
	}
	

}

function mouseReleased()
{
	lock = false;
}