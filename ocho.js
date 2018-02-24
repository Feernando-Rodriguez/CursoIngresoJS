/*Ingreso de alumnos... no sabemos cuantos alumnos hay. 
Lo que vamis a pedir es el nombre.
Lo que quiero saber es cuantos alumnos ingrese*/
function Mostrar()
{
	var seguir="";
	var nombres;
	var contador=0;
	var nota;
	var acumulador=0;
	var promedio;
	var cantidadDeHombres=0;
	var cantidadDeMujeres=0;
	var sexo=0;
	
	while(seguir!= "no")
	{
		nombres=prompt("Ingrese su nombre");
		nota=prompt("Ingrese su nota");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
	 	
	 	while(nota<0 || nota>10)
	 	{
	 		nota=prompt("Ingrese su nota");
			nota=parseInt(nota);
	 	}

	 	sexo=prompt("Ingrese f o m ");

	 	while(sexo!="f" && sexo!="m")
	 	{
	 		sexo=prompt("Ingrese f o m");
	 	}      
  
		contador=contador+1
		seguir=prompt("NO para salir")

		if(sexo=="m")
		{
			cantidadDeHombres++;
		}
		if(sexo=="f")
		{
			cantidadDeMujeres++;
		}
	}
		

	promedio=acumulador/contador;
	document.write("<br> Son "+contador+ " alumnos");
	document.write("<br> el promedios "+promedio);
	document.write("<br> La cantidad de hombres son " + cantidadDeHombres);
	document.write("<br> La cantidad de mujeres son " + cantidadDeMujeres);
}
