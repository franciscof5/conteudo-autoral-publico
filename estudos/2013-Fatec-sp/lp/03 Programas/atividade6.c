#include <stdio.h>
#include <conio.h>
main()
{
      float a, b, m;
      int f;
      printf ("Informe a quantidade de faltas: ");
      scanf ("%d", &f);
      printf ("\n Informe as duas notas obtidas: ");
      scanf ("%f %f", &a, &b);
      m=(a+b)/2;
      if (f>5) printf("\n Reprovado por falta - F");
      else if (m<6) printf ("\n Reprovado - C");
         else if (m<7.5) printf ("\n Arpovado - B");
             else if (m<9) printf ("\n Aprovado - A");
                 else printf ("\n Aprovado - E");
      getch();
}
