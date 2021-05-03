#include <stdio.h>
#include <conio.h>
#include <string.h>
int strpos(char s[], char c) {
    int i, a;
    a = strlen(s);
    for(i=0; i<=a; i++)
             if(s[i]==c) return i;
             return -1; }
main() {
       char st[60];
       char c;
       puts("Digite uma serie de caracteres: \n");
       gets(st);
       puts("Digite o caracter a ser procurado: ");
       scanf("%c", &c);
       printf("O caracter esta na posicao de indice: %d", strpos(st, c));
       getch();
       }
