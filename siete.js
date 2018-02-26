function Mostrar()
{
	var notas;
	var sexo;
	var promedioFinal;
	var alumno;
	var acumulador=0;
	var seguir="";
	var contador=0;




	while(seguir!="no")
	{
		alumno=prompt("Ingrese el nombre: ");
		sexo=prompt("Ingrese f o m: ");

	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Error, Ingrese f o m: ");
	}

		notas=prompt("Ingrese su nota: ")
		notas=parseInt(notas);

		acumulador=acumulador+notas;
	while(notas<0 || notas>10)
		{
			notas=prompt("Error, Ingrese nuevamente su nota");
		}
		contador=contador+1;
		seguir=prompt(NO para salir);

	}	
	






}
