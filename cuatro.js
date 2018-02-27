//Ingrese 3 numeros y muestre el promedio...(No usar if)
//Ahora decir cual de los 3 es mayor.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var promedio;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese su numero");
	numeroTres=prompt("Ingrese su numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos && numeroUno>numeroTres)
	{
		alert("El numero "+numeroUno+ " es el mayor");
	}

	if(numeroDos>numeroUno && numeroDos>numeroTres)
	{
		alert("El numero "+numeroDos+ " es el mayor");
	}

	if(numeroTres>numeroUno && numeroTres>numeroDos)
	{
		alert("El numero "+numeroTres+ " es el mayor");
	}

	if(numeroUno==numeroDos && numeroUno==numeroTres && numeroDos==numeroTres)
	{
		alert("El numero "+numeroUno+ " es el mayor");
	}


	if(numeroUno<numeroDos && numeroUno<numeroTres)
	{
		alert("El menor es el: "+numeroUno);
	}

	if(numeroDos<numeroUno && numeroDos<numeroTres)
	{
		alert("El menor es el: "+numeroDos);
	}
	if(numeroTres<=numeroUno && numeroTres<=numeroDos)
		{
		alert("El menor es el: "+numeroTres);
	    }
//Lo ideal seria tener solo 2 if y un else...


	/*promedio=(numeroUno+numeroDos+numeroTres)/3;

	alert("El promedio es "+promedio);*/




}
