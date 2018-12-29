var canvasID;
var rules;

function preloadRules()
{
	rules = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/rulesbg.png')
	buttonback = loadImage('https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/button_back.png')


}

function setupRules()
{
	buttonx = 0
	buttony = 0

}

function drawRules()
{
	background(rules)
	
	image(buttonback,buttonx,buttony)

	if (mouseX > buttonx && mouseX < buttonx + 117 && mouseY > buttony && mouseY < buttonx+67 && mouseIsPressed)
	{
		canvasID = -1;
	}

}