
//var player: GameObject;
//This block should have no logic for the player, just inherent qualities
//handle all logic in the player class
var symbol : String; 
//try to give each shape via a string, and match strings within player object.
var shapes  = new Array(
	"Triangle",
	"Cross",
	"Circle",
	"Star",
	"Diamond"
);

function Update()
{
	symbol = shapes[0];
	//print(symbol);
}

