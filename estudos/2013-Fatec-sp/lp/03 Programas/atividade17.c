#include <stdio.h>
#include <conio.h>
main() {
       int dia, mes, m29, ano, erro;
       printf ("Digite uma data desmembrado em dia, mes e ano: ");
       scanf ("%d %d %d", &dia, &mes, &ano);
       do {
          erro = 0;
          m29 = 28;
          if ((ano % 4 == 0)) m29 = 29;
          if ((ano %100 == 0) && (ano % 400 != 0)) m29 = 28;
          if ((dia<1) || (dia>31) || (mes<1) || (mes>12)) erro = 1;
          if ((((mes==4) || (mes==6)) || ((mes==9) || (mes==11))) && (dia>30)) erro=1;
          if ((mes==2) && (dia>m29)) erro=1;
          if (erro==1) { 
                      printf("Data invalida. Altere a data: ");
                      scanf ("%d %d %d", &dia, &mes, &ano);
                      }
          } while (erro == 1);
       printf ("Data valida.");
       getch();
       }
                  
       
       
