#include <stdio.h>
#include <conio.h>
#include <math.h>
main() 
{
       double a, b, c, x1, x2;
       printf("informe os valores de 'a, b, c' da equacao do 2o grau: \n");
       scanf(" %lf %lf %lf", &a, &b, &c);
       if (a==0)
          printf("O 'a' precisa ser diferente de zero!\n");
       else {
            x1= (-b -sqrt(pow(b,2) - (4*a*c)))/(2*a);
            x2= (-b +sqrt(pow(b,2) - (4*a*c)))/(2*a);
           printf("Os valores de x1 e x2 sao: %.2lf e %.2lf.", x1, x2);
           }
       getch();
}
