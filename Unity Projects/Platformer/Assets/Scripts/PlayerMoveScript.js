var acceleration : float = 850;
var airAccel : float = 0.25;
var deacceleration : float = 0.9; 
var deaccelerationVel :float;
var grounded : boolean = false;
var jumpVelocity : float = 300;
var doubleJumpVelocity :float = 250;
var maxSpeed : float = 50;
var jumped : boolean = false;
var dJumped : boolean = false;
var maxSlope: float = 60;

function Update () 
{
	if (Mathf.Abs(rigidbody.velocity.x) > maxSpeed)
		rigidbody.velocity.x = maxSpeed;
	if(grounded)
		rigidbody.velocity.x = Mathf.SmoothDamp(rigidbody.velocity.x, 0, deaccelerationVel, deacceleration);
	
	if(grounded)
		rigidbody.AddRelativeForce(Input.GetAxis("Horizontal") * acceleration * Time.deltaTime,0,0);
	else 
		rigidbody.AddRelativeForce(Input.GetAxis("Horizontal") * acceleration * airAccel* Time.deltaTime,0,0);
	if(!grounded && !dJumped && Input.GetButtonDown("Jump"))
	{
		rigidbody.AddForce(0,doubleJumpVelocity,0);
		dJumped = true;
	}
	if(Input.GetButtonDown("Jump") && grounded)
		rigidbody.AddRelativeForce(0,jumpVelocity,0);
	


}

function OnCollisionStay(collision : Collision)
{
	for(var contact : ContactPoint in collision.contacts)
	{
	if (Vector3.Angle(contact.normal, Vector3.up) < maxSlope)
		{
		grounded = true;
		jumped = false;
		dJumped = false;
		}
	}
}

function OnCollisionExit()
{
	grounded = false;
	jumped = true;
	dJumped = false;
}