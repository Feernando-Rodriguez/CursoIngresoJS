//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambre;


	largo=document.getElementById("largo").value;
	ancho=document.getElementById('ancho').value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);
	
	perimetro=((largo*2) + (ancho*2));

	alambre=perimetro*6;

	alert(" Se necesitan " + alambre + " metros de alambre "); 
	//alert("Funciona 3-EntradaSalida");
	
}

