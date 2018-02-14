function Mostrar()
{
//tomo la edad  
	var mesDelAño;

	mesDelAño=document.getElementById('mes').value;

	//alert(mesDelAño);

	switch(mesDelAño)
 	
 	{
 		case "Enero":
 		case "Febrero":
 		case "Marzo":
 		case "Abril":
 		case "Mayo":
 		case "Junio":
 			alert("Falta para el ivierno");
 			break;

 		case "Julio":
 		case "Agosto":
 			alert("Abrigate que hace frio");
            break;

 		case "Septiembre":
 		case "Octubre":
 		case "Noviembre":
 		case "Diciembre":
 			alert("Ya pasamos el frio, ahora hace calor")
 	}







}//FIN DE LA FUNCIÓN