#include <stdio.h>
#include <conio.h>
main() {
       int n, x, y, i;
       do {
           printf ("\nDigite um numero natural: ");
           scanf ("%d", &n);
          } while (n<=0);  
       x=1;
       y=0;  
       for (i=n; i>0; i--) {
          y=x+y;
          x=x+2; }
       printf ("\nO quadrado do numero eh: %d", y);
       getch();
       }
