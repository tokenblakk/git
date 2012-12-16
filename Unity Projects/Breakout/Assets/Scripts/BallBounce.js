var speed = 2000;
var bouncespeed = 1000;
var mod : float = 1;
var range : float = 360;
var edgeL = -110;
var edgeR = 110;
var edgeT = 92;
var push = 2;
var other : Wallbound;


function Update () 
{
	/*if (Input.GetButtonDown("Fire1"))
	{
		var bounceDir = rigidbody.velocity.normalized;
		rigidbody.AddForce(bounceDir * mod * bouncespeed * Time.deltaTime, ForceMode.Impulse);
	}
	*/ //cheats
	other.wall(transform, edgeL, edgeR, edgeT, push);
	if (transform.position.y <-11)
	{
		transform.position.y = -11 + 2;
	}
}

function Awake(){
	var randX : float = Random.Range(-range, range);
	var randY : float = Random.Range(-range, range);
	rigidbody.AddForce(Vector3(randX,randY,0).normalized	* speed * Time.deltaTime, ForceMode.Impulse);
}

function OnCollisionEnter(coll : Collision){
	// if hit paddle increase ball speed
	var bounceDir = rigidbody.velocity.normalized;
	if (coll.gameObject.tag == "Paddle"){
		mod = mod + 0.05;
		//print(mod); mod may not be adding properly.
		rigidbody.AddForce(bounceDir * mod * bouncespeed * Time.deltaTime, ForceMode.Impulse);
	}
	if (coll.gameObject.tag == "Brick"){
		mod = mod + 0.1;
		//print(mod); mod may not be adding properly.
		rigidbody.AddForce(bounceDir * mod * bouncespeed * Time.deltaTime);
	}
}

function OnCollisionExit(coll : Collision){
	if (coll.gameObject.tag == "Brick"){
		Destroy(coll.gameObject);
		GameStart.score += 100;
		//add points if player hits brick
	}
}
