/*Atividade1 */
#include <stdio.h>
#include <math.h>
#include <conio.h>
main()
{
      float peso, altura, IMC;
      printf ("Informe o peso e a altura\n");
      scanf ("%f %f", &peso, &altura);
      IMC = peso/pow(altura,2);
      printf ("O IMC eh %.2f\n", IMC);
      getch();
}
      
