#include <stdio.h>
#include <conio.h>

float hip(float a, float b) {
      float h;
      h = sqrt( ((a)*(a))+((b)*(b)) );
      return h; }
      
double max(double a, double b) {
       if (a>b)
         return a;
       return b; }
       
main() {
       float h;
       double a, b;
       h = hip(6,8);
       printf("Digite dois valores: \n");
       scanf("%lf %lf", &a, &b);
       printf("\nA hipotenusa eh: %.2f \n\nE o maior dos numeros digitos eh: %.2lf", h, max(a, b));
       getch();
       }
