#include <stdio.h>
#include <conio.h>
#define soma(x,y) ((x)+(y))
#define abs(x) ((x)<0?(-(x)):(x))
#define max(x,y) ((x)>(y)?(x):(y))
main() {
       int n1 = -7;
       int n2 = 8;
       printf ("\n %d", soma(2*3, 1+3));
       printf ("\n %d", abs(n1));
       printf ("\n %d", max(n1, n2));
       getch();
       } 
