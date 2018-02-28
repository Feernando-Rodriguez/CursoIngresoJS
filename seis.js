function Mostrar()
{
	var importe;
	var contador=0;
	var menorImporte;
	var mayorImporte;

	while(contador<24)
	{
		contador++;

		importe=prompt("Ingrese su importe:");

		while(importe<=0)
		{
			importe=prompt("Ingrese un importe mayor a 0");
		}

		importe=parseFloat(importe);//Este paso es para que me levante un numero y no asi...

		if(contador==1)
		{
			mayorImporte=importe;
			menorImporte=importe;
		}
		else if(importe>mayorImporte)
		{
			mayorImporte=importe;
		}
		if(importe<menorImporte)
		{
			menorImporte=importe;
		}
	}

	alert("El mayor importe es: "+mayorImporte);
	alert("El menor importe es: "+menorImporte);
}
