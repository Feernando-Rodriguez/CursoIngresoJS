function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese su numero");
	numeroDos=prompt("Ingrese su numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		document.write("El resultado es "+resultado);
	}

	if(numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
		document.write("El resultado es "+resultado);
	}
	if(numeroUno<numeroDos)
	{
		resultado=numeroUno+numeroDos;
		document.write("El resultado es "+resultado);
	}
	

}
