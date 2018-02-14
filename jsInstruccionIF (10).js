function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio;

	aleatorio=Math.floor(Math.random()*(10)+1);

	if(aleatorio==9 || aleatorio==10)
		{
			alert("EXELENTE: " + aleatorio);
		}
	else
	{
		if(aleatorio>=4 && aleatorio<=8)
		{
			alert("APROBO: " + aleatorio);
		}
		else
		{
			alert("Vamos, la proxima se puede "+aleatorio);
		}
	}

}//FIN DE LA FUNCIÓN