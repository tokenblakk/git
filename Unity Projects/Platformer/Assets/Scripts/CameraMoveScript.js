var player : GameObject;
var cameraLag : float = 0.9;
var xRotation : float  = 6;
var yPosition : float = player.rigidbody.position.y+2.6;
var targetXRotation : float;
var targetXRotationV : float;
var targetYV : float;
var rotationSpeed : float = 0.5;
var targetYPosition : float;

function Update () {


if (player.GetComponent(PlayerMoveScript).dJumped)
	{
	//xRotation = transform.rotation.x;
	targetXRotation = Mathf.SmoothDamp(targetXRotation, xRotation+20, targetXRotationV, rotationSpeed);
	targetYPosition = Mathf.SmoothDamp(targetYPosition, yPosition +5, targetYV, rotationSpeed);
	//transform.eulerAngles = Vector3(Mathf.Clamp(xRotation,0.0,30.0), 0, 0);
	}

else if (player.GetComponent(PlayerMoveScript).jumped)
	{
	targetXRotation = Mathf.SmoothDamp(targetXRotation, xRotation+10, targetXRotationV, rotationSpeed);
	targetYPosition = Mathf.SmoothDamp(targetYPosition, yPosition +1.5, targetYV, rotationSpeed);
	}
else 
{
	targetXRotation = Mathf.SmoothDamp(targetXRotation, 6, targetXRotationV, rotationSpeed);
	targetYPosition = Mathf.SmoothDamp(targetYPosition, yPosition, targetYV, rotationSpeed);
}
transform.position.x = player.rigidbody.position.x-5.6;
transform.position.y = targetYPosition;
transform.rotation = Quaternion.Euler(targetXRotation,0,0);
//transform.position.y = targetYPosition;
//transform.eulerAngles = Vector3(Mathf.Clamp(xRotation,0.0,30.0), 0, 0);
//transform.rotation.x = Mathf.Clamp(transform.rotation.x,0.0,30.0);

}