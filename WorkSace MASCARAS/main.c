#include <stdio.h>
#include <stdlib.h>

//void saludar(void); //firma prototipo
//int sumar(int numeroUno, int numeroDos);
float dividirEnteros(int numeroUno,int numeroDos);


int main()
    {
        int numero;
        numero=PedirNumeroPar();

        if(sePudo==0)
        {
            printf("ok");
        }
        else
        {
            printf("Mal");
        }
    /* float numero;//invocacion

        //numero=sumar(3,3);
        numero= dividirEnteros(10,3);
        printf("%f" ,numero);

        return 0;*/
    }
/


float dividirEnteros(int numeroUno,int numeroDos)
{
    float resultado=0;
    resultado=(float)numeroUno/numeroDos;
    return resultado;
}


/*
void saludar(void)
    {
        printf("Hola mundo!\n");
    }
int sumar(int numeroUno,int numeroDos)
{
    int resultado=0;
    resultado=numeroUno+numeroDos;
    return resultado;
}
*/
