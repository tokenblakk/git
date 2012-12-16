public function wall(trans, edgeL, edgeR, edgeT, osize)
{
	if (trans.position.x <= edgeL)
	{
		trans.position.x = edgeL + osize;
	}
	if (trans.position.x >= edgeR)
	{
		trans.position.x = edgeR - osize;
	}
	if (trans.position.y >= edgeT)
	{
		trans.position.y = edgeT - osize;
	}
	
}