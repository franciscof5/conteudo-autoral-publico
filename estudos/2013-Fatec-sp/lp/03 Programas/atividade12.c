#include <stdio.h>
#include <conio.h>
main() {
      /*long int*/ int num, conta, soma = 0, resto;
       do{
           printf ("Digite o numero da conta: \n\n");
           scanf ("%d", &conta); /* ld% */
           } while (conta<0 || conta>999999);
       num = conta;
       do {
           resto = num%10;
           soma = soma + resto; /* s=s+(n%10); */
           num /= 10;             /* n=n/10 */
           } while (num != 0 );
       printf ("\nO numero completo da conta eh: %d - %d\n", conta, soma %= 10);
       getch();
       }
       
       
     
