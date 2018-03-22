#include <stdio.h>
#include <stdlib.h>

/**
*
*@param
*@return
*/
int main()
{
    char nombre;
    float sueldo;
    float sueldoFinal;
    int aumento;
    float resultado;


    printf("Ingrese su nombre\n");
    scanf("%c" , &nombre);

    printf("Ingrese su sueldo\n");
    scanf("%f" , &sueldo);

    printf("Ingrese el aumento\n");
    scanf("%d" , &aumento);

    sueldoFinal=(sueldo*aumento)/100;

    resultado=sueldoFinal+sueldo;

    printf("Su nombre es %c" ,nombre);
    printf(" Su sueldo es de: %f" , sueldo );
    printf(" Su aumento es del: %d" ,aumento);
    printf(" Su sueldo final es de: %f" , resultado );

    return 0;
}
