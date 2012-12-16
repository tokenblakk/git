var customText1 : GUIStyle;
var customText2 : GUIStyle;
var customText3 : GUIStyle;
function OnGUI ()
{
	GUI.Box(Rect(Screen.width/2-200,Screen.height/2-200,300,300), "", customText1);
	GUI.Box(Rect(Screen.width/2-150,Screen.height/2-150,300,300), "", customText2);
	GUI.Box(Rect(Screen.width/2-100,Screen.height/2-100,300,300), "Break-out", customText3);
	
	if(GUI.Button(Rect((Screen.width/2 -110)+100,(Screen.height/2-50)+50,100,50), "Play!", customText3))
		{
			Application.LoadLevel(1);
		}
}