/*Exemplo*/
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
      else 
        if (6.0<=m && m<7.5 && f<=5) printf ("\n Aprovado - B");
         else 
           if (7.5<=m && m<9 && f<=5) printf ("\n Aproado - A");
             else
               if (m>=9 && f<=5) printf ("\n Aprovado - E");
                 else printf ("\n Reprovado - C");
      getch();
}
