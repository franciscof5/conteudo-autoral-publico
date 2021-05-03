# include <conio.h>
#include <stdio.h>
main () {
     char n[21];
     printf("Digite nome e sobrenome: ");
     gets(n); 
     /* scanf("%s", &n); */
     puts("Ola, "); /* ou printf("Ola, %s!", n); */
     puts(n);
     getch();
     }
