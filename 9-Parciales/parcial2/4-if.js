/*No se tiene que validar y no se usa while... Solamente if. se ingresan dos numeros si son iguales
se concatenan, si el mayor es el primero se multiplican de lo contario se restan*/
//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese el primer numero: ");


	numeroDos=prompt("Ingrese el segundo numero: ");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+""+numeroDos;
	}
	else
	{
		/*numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);*/

		if(numeroUno>numeroDos)
		{
			resultado=numeroUno*numeroDos;
		}
		else
		{
			resultado=numeroUno-numeroDos;
		}
		if(resultado%2==0 && resultado!=0)
		{
			resultado=resultado+ " es par.";
		}
	}
	document.write("El resultado es: "+resultado);



}

