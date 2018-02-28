//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeFinal;
	var importeIva=0.21;
	var importe;

	
	importe=prompt("ingrese el importe");

	importeFinal=importe*(importeIva+1);

	document.getElementById('importe').value=importeFinal;


	alert("Importe final mas el IVA es:" + importeFinal);

	//alert("Funciona 2-EntradaSalida"); 
	
}

