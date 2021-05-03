#include <stdio.h>
#include <conio.h>
#include <string.h>
main() {
       /* palindromo */
       char s[50];
       int i, a;
       puts("Digite uma serie de caracteres: \n");
       gets(s);
       a = strlen(s);
       for(i=a; i>=0; i--) 
                printf("%c", s[i]);
       getch();
       }
       
