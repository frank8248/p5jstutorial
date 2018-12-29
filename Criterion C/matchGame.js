var canvasID
var gridOfPhotosBackEnd;
var gridOfPhotosPlayerSelection;
var gridOfPhotos;
var hiddenPhoto;
var selectionCounter;
var lock;
var finalFrameCount;
var lockFrame;
var alpha1;
var back;

function preloadmatchGame()
{
	// starting variables you should not modify
	finalFrameCount = 0;
	lockFrame = false;
	alpha1 = 255;
	lock = false;

	// link to file that student sees
	setupStudentListOfCard();



	// setup grid structure
	// --------------------------------------
	gridOfPhotosPlayerSelection = new Array(maxX);
	gridOfPhotosBackEnd = new Array(maxX);
	gridOfPhotos = new Array(maxX);


	for (var r = 0; r < maxX; r++)
	{
		gridOfPhotosBackEnd[r] = new Array(maxY);
		gridOfPhotosPlayerSelection[r] = new Array(maxY);
		gridOfPhotos[r] = new Array(maxY);
	}

	for (var r = 0; r < maxX; r++)
	{
		for (var c = 0; c < maxY; c++)
		{
			gridOfPhotosBackEnd[r][c] = 0;
			gridOfPhotosPlayerSelection[r][c] = 0;
		}		
	}



	selectionCounter = new Array(2+maxMatch*2);

	for (var x = 0; x < 1+maxMatch*2; x++)
	{
		selectionCounter[x]	= 0;
	}

	var randomNumberCollection = new Array(maxX*maxY);

	for (var x = 0, r = 0; x < maxX*maxY; r++)
	{
		for (y = 0; y < maxMatch; y++)
		{
			randomNumberCollection[x] = r;
			x++;
		}
	}

	// ----------------------------- UPDATE THIS FOR ANY NUMBER OF MATCHES 2x 3x 4x -----------------------------
	// generate random array pairs
	var notFinished = true;
	var nextR = 0;
	var nextC = 0;
	while (notFinished)
	{	
		var temp = int(random(0,randomNumberCollection.length));
		var countMax = 0;

		console.log(nextR+" "+nextC+" "+maxX+" "+maxY+" "+temp+" "+randomNumberCollection.length);

		gridOfPhotosBackEnd[nextR][nextC] = randomNumberCollection[temp];

		nextC++;
		if (nextC == maxY )
		{
			nextR++;
			nextC = 0;
		}
		
		randomNumberCollection.splice(temp,1);
		
	
		if (randomNumberCollection.length == 0)
		{
			notFinished = false;		
		}

	}


	// rearrange data to fit with random array pairing
	var x = 0;
	var count = 0;
	var countP = 0;
	while (x < maxX * maxY / maxMatch)
	{
		for (var r = 0; r < maxX; r++)
		{
			for (var c = 0; c < maxY; c++)
			{
				if (gridOfPhotosBackEnd[r][c] == x)
				{
					gridOfPhotos[r][c] = studentListOfCards[count];
					count++;
					countP++;
				}
				if (countP == maxMatch)
				{
					x++;
					countP = 0;
					c = maxY;
					r = maxX;
				}
			}
		}

	}
	// --------------------------------------

	back = loadImage("https://frank8248.github.io/p5jstutorial/p5jsMatchingGameEngine-master/back.png")


}


function matchGameSetupTables()
{

}


function showCards()
{
	for (var r = 0; r < maxX; r++)
	{
		for (var c = 0; c < maxY; c++)
		{
			// this is where we see if a card is clicked or not
			// at the top of this is a good place to put sound effects
			if (mouseX > widthOfCard+widthOfCard*2*c && mouseX < widthOfCard+widthOfCard*2*c+widthOfCard*2 && mouseY > r*heightOfCard*2+heightOfCard && mouseY < r*heightOfCard*2+heightOfCard+heightOfCard*2 && mouseIsPressed == true && !lock)
			{
				lock = true;
				if (selectionCounter[0] <= maxMatch-1)
				{
					gridOfPhotosPlayerSelection[r][c] = 1;

					selectionCounter[selectionCounter[0]*2+1] = r;
					selectionCounter[selectionCounter[0]*2+2] = c;

					selectionCounter[0]++;
				}
			}
			// shows the cards
			// 0 - default card
			if (gridOfPhotosPlayerSelection[r][c] == 0)
			{
				image(hiddenPhoto,widthOfCard*2*c+widthOfCard,heightOfCard*2*r+heightOfCard,widthOfCard*2,heightOfCard*2);
			}
			// 1 - flipped card
			else if (gridOfPhotosPlayerSelection[r][c] == 1)
			{
				image(gridOfPhotos[r][c],widthOfCard*2*c+widthOfCard,heightOfCard*2*r+heightOfCard,widthOfCard*2,heightOfCard*2);
			}
			// 2 - card is removed

			// show numbers (this can be removed when product is ready)		
			fill(50,50,50);
			textSize(15);
			strokeWeight(4);
			text(gridOfPhotosBackEnd[r][c],widthOfCard*2+widthOfCard*2*c,r*heightOfCard*2+heightOfCard*2);

	
			 
		}		
	}	

}

// checks if cards match or not
function doesItMatch()
{

	// check if they have selected 2 items and reset
	if (selectionCounter[0] == maxMatch)
	{
		if (delayTime() == -1)
		{
			
			// check if all 3 cards matches
			var matchCounter = 0;
			var temp = gridOfPhotosBackEnd[selectionCounter[1]][selectionCounter[2]];
			for (x = 0; x < maxMatch; x++)
			{
				if (gridOfPhotosBackEnd[selectionCounter[1+x*2]][selectionCounter[2+x*2]] == temp)
				{
					matchCounter++;
				}
			}

			// check if all 3 boxes selected are not the same boxes
			var uniqueMatch = false;
			for (var x = 1; x < maxMatch*2-1; x+=2)
			{
				for (var y = x+2; y < maxMatch*2+1; y+=2)
				{
					if (selectionCounter[x] != selectionCounter[y] || selectionCounter[x+1] != selectionCounter[y+1])
					{
						uniqueMatch = true;
					}
					else
					{
						uniqueMatch = false;
						x = maxMatch*2-1;
						y = maxMatch*2+1;
					}
				}
			}
			// if everything matches the remove all the cards
			if (matchCounter == maxMatch && uniqueMatch == true)
			{
				match = true;
				lockFrame = false;
				for (var x = 1; x < maxMatch*2; x+=2)
				{
					gridOfPhotosPlayerSelection[selectionCounter[x]][selectionCounter[x+1]] = 2;				
				}
			}
			// otherwise put all cards back to normal
			else
			{
				for (var x = 1; x < maxMatch*2; x+=2)
				{
					console.log(selectionCounter[x],selectionCounter[x+1]);
					gridOfPhotosPlayerSelection[selectionCounter[x]][selectionCounter[x+1]] = 0;				
				}
			}

			// reset selected items back to all covered
			for (var x = 0; x < 1+maxMatch*2; x++)
			{
				selectionCounter[x] = 0;
			}
			
/*
			// original code
			// are the cards a match?
			if (gridOfPhotosBackEnd[selectionCounter[1]][selectionCounter[2]] == gridOfPhotosBackEnd[selectionCounter[3]][selectionCounter[4]] &&
				(selectionCounter[1] != selectionCounter[3] || selectionCounter[2] != selectionCounter[4]))
			{
				match = true;
				lockFrame = false;
				// remove cards
				gridOfPhotosPlayerSelection[selectionCounter[1]][selectionCounter[2]] = 2;
				gridOfPhotosPlayerSelection[selectionCounter[3]][selectionCounter[4]] = 2;

			}
			else
			{
				// turn cards back to red
				gridOfPhotosPlayerSelection[selectionCounter[1]][selectionCounter[2]] = 0;
				gridOfPhotosPlayerSelection[selectionCounter[3]][selectionCounter[4]] = 0;

			}

			// reset selected items back to all covered
			for (var x = 0; x < 1+maxMatch*2; x++)
			{
				selectionCounter[x] = 0;
			}
*/
		}
	}
	
}

// function that handles the match message
function showMatch()
{
	if (match == true)
	{
		// initiate "match" message countdown
		// this is where you can place sound effects for when you score a match
		if (lockFrame == false)
		{
			alpha1 = 255;
			lockFrame = true;
			finalFrameCount = frameCount + 120;
		}
		fill(255,255,255,alpha1);
		alpha1--;
		text("Match!",520,50);
		textSize(40)
		if (frameCount > finalFrameCount)
		{
			match = false;
			lockFrame = false;
		}

	}
}

// check if the game is over or not function
function gameOver()
{
	var endGame = true;
	for (var r = 0; r < maxX; r++)
	{
		for (var c = 0; c < maxY; c++)
		{
			if (gridOfPhotosPlayerSelection[r][c] != 2)
			{
				endGame = false;
				break;
			}
		}
	}
	// when the game is over switch the canvasID
	if (endGame)
	{
		canvasID = 6;
	}
}



// main cycle for game
function drawmatchGame()
{
	background(back);
	showCards();
	doesItMatch();
	showMatch();
	gameOver();
}