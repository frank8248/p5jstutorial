// declare bgm variable
var bgm;

function preload()
{
	// load sound file into variable bgm
	bgm = loadSound("https://frank8248.github.io/p5jstutorial/p5jsTutorial4.1-master/sounds/Game%20of%20Thrones%20-%20Truth%20-%20Ramin%20Djawadi%20(Season%207%20Soundtrack)official.mp3");

}

function setup()
{
	createCanvas(800,600);

	// play music during setup so that it doesn't loop infinitely
	bgm.play();
}

function draw()
{
	textSize(12);

	background(125,125,125)

	text("Credit for music goes to Benjamin TISSOT from www.bensound.com",10,40);


}

