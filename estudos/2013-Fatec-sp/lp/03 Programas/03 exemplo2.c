#include<stdio.h>
#include<conio.h>
main() 
{
       int n;
       printf("\nDigite um numero: ");
       scanf("%d", &n);
       printf("\nInvertido: ");
       while (n !=0 )
       {
             printf("%d", n%10);
             n/=10;
       }
       getch ();
}
             
