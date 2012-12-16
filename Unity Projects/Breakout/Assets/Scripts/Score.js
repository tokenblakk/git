var customText : GUIStyle;
function OnGUI ()
{
	GUI.Box(Rect((Screen.width/2 -110),(40),230,50),"");
	GUI.Label(Rect((Screen.width/2-80),(40),250,50), "Score: " + GameStart.score, customText);
	GUI.Label(Rect((Screen.width/2-80),(65),230,20), "Lives: " + GameStart.balls, customText);
}