#include <conio.h>
#include <stdio.h>
     
     int fat (int n)
     { long int f = 1;
       for(i=n;i>0;i--)
       f=f*i;
     return f; }
    
main()
{
      int n;
      printf("Digite um numero: ");
      scanf("%d", &n);
      printf("\nO fatorial de %d eh %d", n, fat(n));
}
