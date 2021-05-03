#include <stdio.h>
#include <conio.h>
#include <string.h>
main() {
       char s[50];
       int i, a, c=0;
       puts("Digite uma frase: ");
       gets(s);
       a = strlen(s) +1;
       for(i=0; i<a; i++) {
                if((s[i]==' ')&&(i!=0)) c++;
                if(s[i]=='\0') {
                               ++c;
                               break; }
                }
       printf("\nA quantidade de palavras digitadas foi: %d", c);
       getch();
       }
