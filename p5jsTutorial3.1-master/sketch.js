var buttonNothing;
var buttonHoverOver;
var buttonClick;
var turtle;
var button2X;
var button2Y;

function preload()
{


	turtle = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-frank-kwok-a/p5jsTutorial3.1-master/turtle.jpg');

	buttonClick = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-frank-kwok-a/p5jsTutorial3.1-master/button_turtle-4d.png');
	buttonHoverOver = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-frank-kwok-a/p5jsTutorial3.1-master/button_turtle-d.png');
	buttonNothing = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-frank-kwok-a/p5jsTutorial3.1-master/button_turtle.png');
}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
  
}

function draw()
{
	background(73,228,171)


	// Example 1: easy to understand - Start

	image(turtle,10,75,729/1.1,425/1.1);

	// Example 1: easy to understand - End




	// Example 2: less code but harder to understand - Start

	strokeWeight(3);



	if (mouseX > button2X && mouseX < button2X + 150 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonHoverOver,button2X,button2Y);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
		}
	}
	else
	{
		image(buttonNothing,button2X,button2Y);
	}


	// Example 2: less code but harder to understand - End


}