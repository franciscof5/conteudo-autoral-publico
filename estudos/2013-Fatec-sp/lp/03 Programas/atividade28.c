#include <conio.h>
#include <stdio.h>

void invert(unsigned int n) {
    if (n<10) printf("%u", n);
    else {
         printf("%u", n%10);
         invert(n/10); }
                            }
main(){
       unsigned int n;
       printf("\nDigite um numero: ");
       scanf("%u", &n);
       printf("\nO numero invertido eh: ");
       invert(n);
       getch();
       }
                            
