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
	print(symbol);
}
