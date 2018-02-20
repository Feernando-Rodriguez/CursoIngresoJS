function Mostrar()
{


	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	var iteraciones=5;

	while(contador<iteraciones)
	{
		contador++;
		numero=prompt("");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}

	promedio=acumulador/contador;


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN