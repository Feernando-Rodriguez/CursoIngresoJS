function Mostrar()
{
//tomo la edad  
	var mesDelAño;

	mesDelAño=document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 29 dias o menos");
			break;

		case "Enero":
 		case "Marzo":
 		case "Mayo":
 		case "Julio":
 		case "Agosto":
 		case "Octubre":
 		case "Diciembre":
 			alert("Este mes tiene 31 dias");
 			break;


 		case "Abril":
 		case "Junio":
 		case "Septiembre":
 		case "Noviembre":
 			alert("Este mes tiene 30 dias");
 			
	}   
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN