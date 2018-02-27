//Pedir el precio y el porcentaje de descuento
function Mostrar()
{
	var importeInicial;
	var importeFinal;
	var importeIva=0.21;
	var descuento;


	importeInicial=parseInt(importeInicial);

	importeInicial=prompt("Ingrese su importe");
	descuento=prompt("Ingrese el descuento");


	resultado=(descuento*importeInicial)/100;

	importeFinal=importeInicial-resultado;


	//importeFinal=importeInicial*(1+importeIva);

	//document.getElementById('importeFinal').value=importeFinal;

	alert("Su importe final es "+importeFinal);


  
}
