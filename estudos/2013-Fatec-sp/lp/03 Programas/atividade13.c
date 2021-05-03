#include <stdio.h>
#include <conio.h>
main() {
       int n, fat = 1;
       do {
           printf ("Digite um numero n>=0 :\n");
           scanf ("%d", &n);
           } while (n<0);
       if (n != 0) 
       {
         do {
            fat = n*fat;
            n= n-1;
            } while (n != 0);
            printf ("O fatorial eh %d.", fat);
       }
       else 
         printf ("O fatorial eh 1. ");
       getch();
       }
