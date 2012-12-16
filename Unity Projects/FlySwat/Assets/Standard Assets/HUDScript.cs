using UnityEngine;
using System.Collections;

public class HUDScript : MonoBehaviour {

	private int gameTime;
	protected int score;
	public int lives;
	public GUIStyle customText;
	
	void Start () 
	{
		score = 0;
		lives = 3;
	}
	
	// Update is called once per frame
	void Update () 
	{
	    if (Input.GetKey(KeyCode.Escape))
			//if (Input.GetKey ("Escape")) 
        	Application.Quit();
		if (lives <= 0)
			Application.Quit();
	}
	
	void OnGUI ()
	{
		GUI.Box(new Rect((Screen.width/2 -110),(40),230,50),"");
		GUI.Label(new Rect((Screen.width/2-80),(40),250,50), "Score: " + score.ToString(), customText);
		GUI.Label(new Rect((Screen.width/2-80),(65),230,20), "Lives: " + lives.ToString(), customText);
	}
	
	public void increasePoints(int point)
	{
		this.score += point;
	}
	
	public void increaseLives()
	{
		this.lives += 1;
	}
	
	public void decreaseLives()
	{
		this.lives -= 1;
	}
	
}
 