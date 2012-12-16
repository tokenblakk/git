var player : GameObject;
//player = GameObject.GetComponent(transform);
var cameraLag : float = 0.9;
//var xRotation : float  = 6;
var yRotation : float  = 6;
var yPosition : float;
var zPosition : float;
var xPosition : float;
//player.rigidbody.position.y;
var targetYRotation : float;
var targetXRotationV : float;
var targetYRotationV : float;
var targetYV : float;
var targetXV : float;
var targetZV : float;
var rotationSpeed : float = 0.5;
var targetYPosition : float;
var targetZPosition : float;
var targetXPosition : float; //Zoom
var mouseLookSpeed : float = 5;

function Update () {
yPosition = player.GetComponent(Transform).position.y;
zPosition = player.GetComponent(Transform).position.z;
xPosition = player.GetComponent(Transform).position.x + 10;

yRotation = Input.GetAxis("Mouse X") * mouseLookSpeed;
//yRotation = transform.rotation.y;
targetYRotation = Mathf.SmoothDamp(targetYRotation, yRotation+20, targetXRotationV, rotationSpeed);
/*targetYPosition = Mathf.SmoothDamp(targetYPosition, yPosition +5, targetYV, rotationSpeed);
	//transform.eulerAngles = Vector3(Mathf.Clamp(yRotation,0.0,30.0), 0, 0);

/*
else if (player.GetComponent(PlayerMoveScript).jumped)
	{
	targetYRotation = Mathf.SmoothDamp(targetYRotation, yRotation+10, targetXRotationV, rotationSpeed);
	targetYPosition = Mathf.SmoothDamp(targetYPosition, yPosition +1.5, targetYV, rotationSpeed);
	}
else 
{*/
if (Input.GetAxisRaw("Horizontal") == 1)
{
	targetXPosition = xPosition + 2;
	targetXPosition = Mathf.SmoothDamp(xPosition, targetXPosition, targetXV, rotationSpeed);//rotational speed
}
else 
{	
	targetXPosition = xPosition + 5;
	targetXPosition = Mathf.SmoothDamp(xPosition, targetXPosition, targetXV, rotationSpeed);//rotational speed
}
targetYRotation = Mathf.SmoothDamp(targetYRotation, 270, targetYRotationV, rotationSpeed);
targetYPosition = Mathf.SmoothDamp(targetYPosition,  yPosition +1, targetYV, rotationSpeed);
targetZPosition = Mathf.SmoothDamp(targetZPosition,  zPosition +1, targetZV, rotationSpeed);
//}
transform.position.z = targetZPosition;
transform.position.y = targetYPosition;
transform.position.x = targetXPosition;
transform.rotation = Quaternion.Euler(0,targetYRotation,0);
//transform.position.y = targetYPosition;
//transform.eulerAngles = Vector3(Mathf.Clamp(0.0,yRotation,0.0), 0, 0);
//transform.rotation.x = Mathf.Clamp(transform.rotation.x,0.0,30.0);

}