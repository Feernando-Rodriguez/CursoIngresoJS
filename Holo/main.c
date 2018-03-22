#include <stdio.h>`phe
#include <stdlib.h>

int main()
{
    int numeroUno;
    int numeroDos;
    int numeroTres;
    int numero;

    printf("Ingrese un numero/n ");

   //Recibe primero una mascara y la mascara define el tamaño de la variable
   //El tamaño es un entero
    scanf("%d" , &numeroUno);


    printf("Ingrese otro numero/n ");

    scanf("%d" , &numeroDos);



    printf("Ingrese otro numero/n ");
    scanf("%d" , &numeroTres);

    if(numeroUno>numeroDos && numeroUno>numeroTres)
    {
        numero=numeroUno;
    }
    else
        {
            if(numeroDos>numeroUno && numeroDos>numeroTres)
            {
                numero=numeroDos;
            }
            else
            {
                numero=numeroTres;
            }
        }
        printf("El mayor numero es: %d , numero")

        return 0;

}
