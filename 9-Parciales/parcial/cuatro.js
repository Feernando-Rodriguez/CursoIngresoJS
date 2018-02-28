function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese el primer numero:");
	numeroDos=prompt("Ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		alert("El resultado es: "+resultado);

		if(numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
			alert("El resultado es: "+resultado);

		}
		if(numeroUno<numeroDos)
        {
        	resultado=numeroUno+numeroDos;
			alert("El resultado es: "+resultado);
        }
	}
}
