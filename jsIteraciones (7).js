function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	numero=prompt("Ingrese su numero");
	numero=parseInt(numero);

	while(contador<acumulador)
	{
		contador++;
		numero=prompt("");
		numero=parseInt(numero);
		acumulador=acumulador+contador;
	}
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN