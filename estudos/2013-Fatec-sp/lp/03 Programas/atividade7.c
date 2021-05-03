#include <stdio.h>
#include <conio.h>
main()
{
      int n;
      printf ("Informe um numero inteiro: ");
      scanf ("%d", &n);
      printf ("O numero eh %s", n%2==0 ? "par" : "impar");
      getch ();
}
