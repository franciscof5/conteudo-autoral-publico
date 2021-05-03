#include <stdio.h>
#include <conio.h>
main() {
     int x, y;
     x=3;
     y = x*(x+1)*x++;
     printf ("\nO valor de x eh %d e o de y eh %d", x, y);
     x=5;
     y=3;
     y*=x+1;
     printf ("\nO valor de x eh %d e o de y eh %d", x, y);
     getch();
     }
