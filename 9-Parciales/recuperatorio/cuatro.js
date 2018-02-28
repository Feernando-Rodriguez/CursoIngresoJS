function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("Ingrese el primer numero:");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese el segundo numero:");
	numeroDos=parseInt(numeroDos);

	suma=numeroUno+numeroDos;

	if(suma>0)
	{
		document.write("El resultado es pasitivo: "+suma);
	}
	else
	{
		if(suma<0)
		{
			document.write("El resultado es negativo: "+suma);
		}
		else
		{
			document.write("El resultado es cero: "+suma);
		}
	}

}
