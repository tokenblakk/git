@script RequireComponent(MeshCollider)
var ball : Transform;

function Update () {
}
function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "Ball")
	{
		Destroy(other.gameObject);
		GameStart.balls -=1;
		if (GameStart.balls <=0)
		{
			return;
		}
		//give me less balls
		else
		var ball = Instantiate(ball, Vector3(0,15,75), Quaternion.identity);
	}
}