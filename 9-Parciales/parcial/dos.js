function Mostrar()
{
	var importe;
	var importeFinal=0;
	var importeIva=0.21;

	importe=prompt("Ingrese su importe: ");
	importe=parseInt(importe);

	importeFinal=importe*importeIva;

	alert("Su importe final es: "+importeFinal);
	
}
