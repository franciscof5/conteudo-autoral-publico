#include <stdio.h>
#include <conio.h>
#include <math.h>
main() 
{
       double delta, a, b, c, x1, x2;
       printf("informe os valores de 'a, b, c' da equacao do 2o grau: \n");
       scanf(" %lf %lf %lf", &a, &b, &c);
       if (a==0)
          printf("O 'a' precisa ser diferente de zero!\n");
       else { /* precisa fazer a valida��o do delta! caso seja negativo */
            delta = pow(b,2) - (4*a*c);
            if (delta<0)
               printf ("\n Nao existem raizes reais.");
            else       
            x1= (-b -sqrt(delta))/(2*a);
            x2= (-b +sqrt(delta))/(2*a);
           printf("Os valores de x1 e x2 sao: %.2lf e %.2lf.", x1, x2);
           }
       getch();
}
