#include <conio.h>
#include <stdio.h>

void cont_reg(unsigned int n) {
     if (n==1) printf("%u", n);
     else {
     printf("%u ", n);
     cont_reg(n-1);  }
     }
     
main() {
       unsigned int n;
       printf("Digite um numero: ");
       scanf("%u", &n);
       printf("\nA contagem regressiva eh: ");
       cont_reg(n);
       getch();
       }
