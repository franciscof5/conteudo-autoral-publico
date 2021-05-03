#include <stdio.h>
#include <conio.h>
main() {
       int n, i;
       float x, y;
       printf ("Digite um numero e em seguida a elevacao de sua potencia: \n");
       scanf ("%f %d", &x, &n);
       y = x;
       for (i = --n; i>0; i--)
         x= y*x;
       printf ("O resultado eh: %.2f", x);
       getch();
       }
