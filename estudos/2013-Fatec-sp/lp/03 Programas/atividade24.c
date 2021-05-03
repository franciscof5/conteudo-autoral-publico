#include <stdio.h>
#include <conio.h>

double pot(double a, unsigned int b) {
       if (b==0) return 1;
       return (a*pot(a,b-1)); }
       
main() {
      double a;
      unsigned int b;
      printf("Digite a base 'a' e a potencia 'b': \n");
      scanf("%lf %u", &a, &b);
      printf("\n%.2lf elevado a %u: %.2lf", a, b, pot(a,b));
      getch();
      }
