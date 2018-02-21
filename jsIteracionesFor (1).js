function Mostrar()
{
	var contador=0;
	var iteraciones=10;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDeCeros=0;


	for(contador=0;contador<iteraciones;contador++)
	{
		document.write("<br>"+ contador)

		if(contador==0)
		{
			contadorDeCeros++;
		}
		else
		{
			if(contador%2==0)
			{
				contadorDePar++;
			}
			else
			{
				contadorDeImpar++;
			}

		}
		//contador++;
		if(contador==10)
		{
			break;
		}
	}
		document.write("<br> par: " + contadorDePar);
		document.write("<br> impar: " + contadorDeImpar);
		document.write("<br> ceros: " + contadorDeCeros);
		

}