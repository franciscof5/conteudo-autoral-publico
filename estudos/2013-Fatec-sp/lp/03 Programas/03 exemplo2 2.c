#include<stdio.h>
#include<conio.h>
main(){
       int n;
       do{
       printf("\nDigite um numero (n>=0): ");
       scanf("%d", &n);
       } while (n<0);
       printf("\nInvertido: ");
       do{
             printf("%d", n%10);
             n/=10;
       }while (n !=0 );
       getch ();
}
             
