function Mostrar()
{
	var mesDelAño;

	mesDelAño=prompt("Ingrese un mes:");

	switch(mesDelAño)
	{
		case "Diciembre":
			alert("Se vienen las fiestas.");
			break;

		case "Enero":
			alert("Comienza el año.");
			break;

	    default:
	    	alert("No es Enero, ni Diciembre.");
	}


}
