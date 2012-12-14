//@script RequireComponent(CharacterController)


function Update () {


if(Input.GetAxisRaw("Horizontal") == 1)
	rigidbody.AddTorque(Vector3(1,0,0));
	//print("right");
else if(Input.GetAxisRaw("Horizontal") == -1)
	rigidbody.AddTorque(Vector3(-1,0,0));
	//print("left");
else if(Input.GetAxisRaw("Vertical") == 1)
	print("up");
else if(Input.GetAxisRaw("Vertical") == -1)
	print("down");
else print("");


}