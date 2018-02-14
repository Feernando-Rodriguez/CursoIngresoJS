function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad>0 && edad<13 || edad>17)
	{
		alert("No es adolescente");
	}


}//FIN DE LA FUNCIÓN