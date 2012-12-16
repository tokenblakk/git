//@script RequireComponent(CharacterController)


function Update () {


if(Input.GetAxisRaw("Horizontal") == 1)
	rigidbody.AddTorque(Vector3(90,0,0));
	//print("right");
else if(Input.GetAxisRaw("Horizontal") == -1)
	rigidbody.AddTorque(Vector3(-90,0,0));
	//print("left");
//else if(Input.GetAxisRaw("Vertical") == 1)
	//print("up");
//else if(Input.GetAxisRaw("Vertical") == -1)
	//print("down"); TODO Make some cool interation with the level here
//else print("");


}