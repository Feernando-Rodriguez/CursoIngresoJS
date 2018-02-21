function Mostrar()
{
	var contador=0;


	for(contador=0;;contador++)
	{
		document.write("<br>"+ contador);
		if(contador==0)
		{
			break;
		}
		//document.write("Despues de continue");
	}

}