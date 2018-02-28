/*Se ingresa hasta que el usuario quiera el nombre de un animal. El peso del mismo
validar que sea mayor a 0 y la temperatura del habitat de este animal... validar entre -40 y 41°... Informar, 
la cantidad de temperaturas pares, la cantidad de temperaturas impares, el nombre del animal mas pesado, el nombre del
animal menos pesado, la cantidad de animales que viven en habitat menores a 0 inclusive, el promedio del peso de todos los animales
la temperatura maxima y la minima */
//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nombreAnimal;
	var peso;
	var temperatura;
	var respuesta="";
	var contador=0;

	/*nombreAnimal=prompt("Ingrese un nombre de un animal:");
	peso=prompt("Ingrese el peso:");
	temperatura=prompt("Ingrese la temperatura:");*/

	respuesta="si";

	while(respuesta!="no")
	{
		contador++;

	
		nombreAnimal=prompt("Ingrese un nombre de un animal:");
		peso=prompt("Ingrese el peso:");
		temperatura=prompt("Ingrese la temperatura:");

		while(peso<0)
		{
			peso=prompt("Error, Ingrese el peso mayor a 0");
		}

		while(temperatura<-40 && temperatura>40)
		{
			temperatura=prompt("Error, Ingrese una temperatura entre -40 y 40°")
		}
	}
}

