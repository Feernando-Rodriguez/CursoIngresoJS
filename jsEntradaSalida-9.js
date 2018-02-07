/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var importe;
/*Lo que hago a continuacion es tomar un importe por ID y transformarlo
a entero por parseInt()*/
importe=document.getElementById('sueldo').value;
importe=parseInt(importe);
/*Y aca abajo hice una cuentae porcentaje...Mi importe+ el 10% de aumento*/
resultado=importe*1.1;

document.getElementById('resultado').value=resultado;
/*Y no lo llama por alert...Sino que quiero que me lo haga en el cuadro de texto*/
	
}
