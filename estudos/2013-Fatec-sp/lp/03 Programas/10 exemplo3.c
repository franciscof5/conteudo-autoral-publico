#include <string.h>
#include <stdio.h>
#include <conio.h>
main() {
       char resposta[] = "BRANCA";
       char resp[40];
       puts("Qual a cor do cavalo branco de Napoleao?");
       gets(resp);
       strupr(resp);
       
       while (strcmp(resp, resposta)!=0)
       { printf("ERRO! Tente de novo.\n");
         gets(resp);
         strupr(resp);  }
       
       printf("Correto!\n");
       getch();
       }
