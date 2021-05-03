#include <stdio.h>
#include <conio.h>

void rodizio(unsigned int placa) {
    switch(placa%10) {
                     case 1:
                     case 2: printf("\nSeu dia de rodizio eh segunda-feira!"); break;
                     case 3:
                     case 4: printf("\nSeu dia de rodizio eh terca-feira!"); break;
                     case 5:
                     case 6: printf("\nSeu dia de rodizio eh quarta-feira!"); break;
                     case 7:
                     case 8: printf("\nSeu dia de rodizio eh quinta-feira!"); break;
                     case 9:
                     case 0: printf("\nSeu dia de rodizio eh sexta-feira!");
                     }
                     }
main(){
       unsigned int placa;
       printf("\nInforme a placa: ");
       scanf("%u", &placa);
       rodizio(placa);
       getch();
       }
    
                                  
