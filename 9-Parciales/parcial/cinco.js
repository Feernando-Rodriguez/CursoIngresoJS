function Mostrar()
{
	var diaDeSemana;
	var finDeSemana;

	diaDeSemana=prompt("Ingrese un dia:");

	switch(diaDeSemana)
	{
		case "Sabado":
		case "Domingo":
			alert("Es fin de semana.");
			break;

		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			alert("A trabajar !!!");
			break;
	}
}
