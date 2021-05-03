#include <stdio.h>
#include <conio.h>
main() {
       int n, b;
       printf("Digite uma sequencia terminada por zero: \n");
       do {
           scanf("%d", &n);
           b = n*n;
           printf (" -> %d\n", b);
           } while ( n != 0);
       getch ();
       }
       
           
       
