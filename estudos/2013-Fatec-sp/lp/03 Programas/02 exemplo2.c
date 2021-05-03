/*Exemplo*/
#include <stdio.h>
#include <conio.h>
main()
{
      float a, b, m;
      printf ("\n Informe as duas notas obtidas: ");
      scanf ("%f %f", &a, &b);
      m=(a+b)/2;
      if (m>=6.0) printf ("\n Aprovado");
      else if (m>=3) printf ("\n Recuperação")
      else printf ("\n Reprovado");
      getch();
}
