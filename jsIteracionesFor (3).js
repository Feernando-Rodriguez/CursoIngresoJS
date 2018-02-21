function Mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");
	
	//var contador=0;
	var numeroRandom;
	var contador0=0;
	var contadorDeUnos=0;
	var contadorDeDos=0;
	var contadorDeTres=0;
	var contadorDeCuatros=0;
	var contadorDeCincos=0;
	var contadorDeSeis=0;
	var contadorDeSietes=0;
	var contadorDeOchos=0;
	var contadorDeNueves=0;



	for(contador=0;contador<100;contador++)
	{
		numeroRandom=Math.floor(Math.random()*10);

		switch(numeroRandom)
		{
			case 0:
				contador0++;
				break;
			case 1:
				contadorDeUnos++;
				break;
			case 2:
				contadorDeDos++;
				break;
			case 3:
				contadorDeTres++;
				break;
			case 4:
				contadorDeCuatros++;
				break;
			case 5:
				contadorDeCincos++;
				break;
			case 6:
				contadorDeSeis++;
				break;
			case 7:
				contadorDeSietes++;
				break;
			case 8:
				contadorDeOchos++;
				break;
			case 9:
				contadorDeNueves++;
				break;
		}
	}
		document.write("<br> Cantidad de ceros: "+contador0)
	    document.write("<br> Cantidad de Unos: "+ contadorDeUnos)
	    document.write("<br>  Cantidad de Dos: " +contadorDeDos)
	    document.write("<br>  Cantidad de Tres: "+contadorDeTres)
		document.write("<br>  Cantidad de Cuatros: " +contadorDeCuatros)
	    document.write("<br>  Cantidad de Cincos: "+ contadorDeCincos)
	    document.write("<br>  Cantidad de Seis: " +contadorDeSeis)
	    document.write("<br>  Cantidad de Sietes: "+contadorDeSietes)
        document.write("<br>  Cantidad de Ochos: " +contadorDeOchos)
        document.write("<br>  Cantidad de Nueves: " +contadorDeNueves)

}//FIN DE LA FUNCIÓN