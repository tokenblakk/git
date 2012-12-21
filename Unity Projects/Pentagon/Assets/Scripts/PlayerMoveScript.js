//@script RequireComponent(CharacterController)
@script RequireComponent(ParticleEmitter)

var laser : ParticleEmitter;
var fuelTimer : float = 5;
var timerReset : float = 1.5;
var hasFuel : boolean = true;

function Update () {

	if (fuelTimer <= 0)
		hasFuel = false;
	if (timerReset <= 0)
		{
			timerReset = 1.5;
			fuelTimer = 5;
			hasFuel = true;
		}
	if (!hasFuel)
		laser.emit = false;
	if((!hasFuel || laser.emit == false) && fuelTimer < 5) //count our timer if we need fuel
		timerReset -= Time.deltaTime;
	if (Input.GetAxisRaw("Horizontal") == 1)
		{
			rigidbody.AddTorque(Vector3(90,0,0));
			laser.emit = false;
			//print("right");
		}
	if (Input.GetAxisRaw("Horizontal") == -1)
		{
			rigidbody.AddTorque(Vector3(-90,0,0));
			laser.emit = false;
			//print("left");
		}
	else if (Input.GetAxisRaw("Vertical") == 1 && hasFuel)	//UP 
		{
			rigidbody.AddRelativeForce(0,-55,0); //Jetpack, reverse jetpack spouting from top
			laser.emit = true;
			fuelTimer -= Time.deltaTime;
		}
	else if(Input.GetAxisRaw("Vertical") == -1)
	{
		checkBlock(); //TODO Make some cool interation with the level here
		laser.emit = false;
	}

	else 
	{
		laser.emit = false; //cut off unnexxessary laasers
	}
	
	//else print("");
}

function OnGUI()
{
	GUI.Box(Rect(10, 15, (fuelTimer*20)+7, 20),"Fuel");	//shows player fuels while fuel is available.
} 

function OnCollisionStay(collision : Collision)
{
	//var contact = collision.contacts[0];
	for (var contact: ContactPoint in collision.contacts)
		{
			if (contact.otherCollider.tag.Equals("Block"))// "Triangle")
				{
					laser.emit = true;
					//print(otherCollider.name);
				}
		}
}

function checkBlock()
{
	print("Checking block...");
}