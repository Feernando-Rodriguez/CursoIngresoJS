function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<13)
	{
		alert("Es niño");
	}
	else

	if(edad>17)
	{
		alert("Es mayor");
	}
	else
	{
		alert("Es adolescente");
	}



}//FIN DE LA FUNCIÓN