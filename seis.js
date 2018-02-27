/*Ingrese numeros hasta que el cliente quiera, van a informar cuantos pares e impares ha yen el promedio de los positivos
ademas de el maximo y el minimo*/
function Mostrar()
{
	var numero;
	var minimo;
	var maximo;
	var seguir="";
	var negativo=0;
	var positivo=0;
	var contador=0;
	
	while(seguir!="no")
	{
		numero=prompt("Ingrese su numero");
		numero=parseInt(numeros);

		if(numero<0)
		{
			negativo+1;
			alert("El numero es negativo");
		}
		else
		{
			positivo+1;
			alert("El numero es positivo");
		}


	}


}
