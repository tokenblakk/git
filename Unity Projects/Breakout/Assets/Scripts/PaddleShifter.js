var speed = 15;
var mouseThreshold = 0.25;
var other: Wallbound;
var edgeL = -100;
var edgeR = 100;
var edgeT = 92;
var push = 15; //distance to push object back from wall, size

function Update () {
	var mousex : float = Input.GetAxis("Mouse X");
	//print("Mousex: " + mousex);
	var translation : float = -mousex * speed;
	other.wall(transform, edgeL, edgeR, edgeT, push);	
	if (mousex >= mouseThreshold || mousex <= -mouseThreshold)
	{
		transform.Translate(0,translation,0);
	}
	else
		transform.Translate(0,0,0);

		//print("Mouse Still");
		//return;

}