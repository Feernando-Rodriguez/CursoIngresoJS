function Mostrar()
{
//tomo la edad  
	var mesDelAño;

	mesDelAño=document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
				break;
			
		case "Enero":
 		case "Marzo":
 		case "Abril":
 		case "Mayo":
 		case "Junio":
 		case "Julio":
 		case "Agosto":
 		case "Septiembre":
 		case "Octubre":
 		case "Noviembre":
 		case "Diciembre":
 			alert("Este mes tiene 30 o más días");

	}