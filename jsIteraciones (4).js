function Mostrar()
{

	var numero;
	

	numero=prompt("ingrese un número entre 0 y 10.");
	
	while(numero>10 || numero<0)
	{
		numero=prompt("Error, ingrese un numero entre 0 y 10");
		numero=parseInt(numero);
	}

		alert("Correcto");
}//FIN DE LA FUNCIÓN