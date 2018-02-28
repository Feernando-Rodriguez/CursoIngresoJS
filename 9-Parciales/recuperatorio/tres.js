function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var suma;

	precioUno=document.getElementById('precioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('precioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('precioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	promedio=suma/3;

	alert("La suma total de los precios es: "+suma);

	alert("El promedio es: "+promedio);
}
