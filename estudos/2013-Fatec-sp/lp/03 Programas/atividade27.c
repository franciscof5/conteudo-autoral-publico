#include <conio.h>
#include <stdio.h>

unsigned int prod(unsigned int a, unsigned int b) {
         if (b==0) return 0;
         return (a + prod(a, b-1)); }
         
main() {
       unsigned int a, b;
       printf("Digite dois numeros: \n");
       scanf("%u %u", &a, &b);
       printf("O produto eh: %u", prod(a, b));
       getch();
       }
       
