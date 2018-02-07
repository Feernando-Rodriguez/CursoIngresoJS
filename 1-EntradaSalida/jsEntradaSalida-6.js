/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
/*En la linea del parseInt() tuve que sacar
las comillas para que realice la cuenta sin
colocar los valores*/
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);


	resultado=numeroUno+numeroDos;
	alert(resultado);

}

