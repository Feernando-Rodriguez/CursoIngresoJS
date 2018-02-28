function Mostrar()
{
	var importe;
	var importeFinal;
	var descuento=0.25;

	importe=prompt("Ingrese su importe:");
	importe=parseInt(importe);


	importeFinal=importe*descuento;

	alert("El importe final es: "+importeFinal);
}
