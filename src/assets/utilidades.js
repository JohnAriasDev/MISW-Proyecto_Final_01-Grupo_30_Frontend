function showDiv(divvar,x,y) 
	{
		if (document.getElementById(divvar))
			{
			const divref = document.getElementById(divvar).style;
			divref.visibility = 'visible';
			}
	}
function hideDiv(divvar)
{
		if (document.getElementById(divvar))
			{
			const divref = document.getElementById(divvar).style;
			divref.visibility = 'hidden';
			}
}