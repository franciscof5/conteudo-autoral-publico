/*Atividade2*/
#include <stdio.h>
#include <conio.h>
main()
{
     float C, F;
     printf ("Informe a temperatura em Fahrenheit:\n");
     scanf("%f", &F);
     C = (F - 32) *5/9;
     printf ("\nO valor correspondente em Celsius eh: %.2f", C);
     getch ();
}
