var brick : Transform;
static var balls = 3;
static var score = 0;
var rows : float;
var columns : float;

function Start()
{
Screen.showCursor = false;
//Kill the cursor
	for (var y = columns; y < 75; y+=4)//75 is good stop height
	{
		for(var x = -rows; x <rows; x+=12)
		{
			var brick = Instantiate(brick, Vector3(x,y,75), Quaternion.identity);
		}
	}
}

function Update () {
    if (Input.GetKey ("escape")) 
	{
        Application.Quit();
    }	
	if(balls <= 0)
	{
		//YOU LOSE
		Application.Quit();
	}
	if(score >= 7000)
	{
		//YOU WIN
		Application.Quit();
	}

}