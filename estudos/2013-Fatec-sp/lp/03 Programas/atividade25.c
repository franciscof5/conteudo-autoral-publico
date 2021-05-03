#include <stdio.h>
#include <conio.h>

void binario(unsigned int n) {
 
         if (n<2) printf("\nO binario eh: %u", n);
         else {
              binario(n/2);
              printf ("%u", n%2); } 
                            }
                 
main() {
       unsigned int n;
       printf("\nDigite um numero: ");
       scanf("%u", &n);
       binario(n);
       getch();
       } 
