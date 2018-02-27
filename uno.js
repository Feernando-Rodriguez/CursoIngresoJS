/*Pedir la base y la alutura por prompt de un triangulo equilatero... Informar perimetro y superficie*/
function Mostrar()
{
	var perimetro;
	var altura;
	var superficie;
	var base;

	altura=prompt("Ingrese la altura");
	base=prompt("Ingrese la base");


	altura=parseInt(altura);
	base=parseInt(base);

	//base=document.getElementById('laBase').value;



	perimetro=base*3;

	superficie=(base*altura)/2;

	alert("El perimetro es "+perimetro+ " Y la superficie es "+superficie);
}
