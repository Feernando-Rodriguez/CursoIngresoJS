//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;

	mes=prompt("Ingrese un mes del año");

	switch(mes)
	{
		case "Enero":
		case "Febrero":
			alert("Veranito!!!!");
			break;
		default:
			alert("Extraño enero y febrero!!!");
	}
	//alert("Funciona 5-Switch"); 
	
}

