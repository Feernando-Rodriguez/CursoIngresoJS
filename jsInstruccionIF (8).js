function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;
	
	
	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(estadoCivil!="Soltero")
	{
		if(edad<18)
		{
			console.log("NO HACER NADA");
		}
	}
		if(estadoCivil=="Soltero")
		 { 
			if(edad>17)
			{
				alert("Es soltero y no es menor");
			}
		 }
	

	


}//FIN DE LA FUNCIÓN