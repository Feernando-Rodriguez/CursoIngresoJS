function Mostrar()
{
//tomo la edad  
	var edad;

	edad=parseInt(document.getElementById('edad').value);

	if(edad<18 && estadoCivil.value!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}



	


}//FIN DE LA FUNCIÓN