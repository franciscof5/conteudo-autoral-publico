#include <stdio.h>
#include <conio.h>
main()
{
      int placa;
      printf("Informe o numero da placa: ");
      scanf ("%d", &placa);
      placa = placa % 10;
      switch (placa) {
             case 1:
             case 2: printf("\nseu dia de rodizio eh segunda-feira"); break;
             case 3:
             case 4: printf("\nseu dia de rodizio eh terca-feira"); break;
             case 5:
             case 6: printf("\nseu dia de rodizio eh quarta-feira"); break;
             case 7:
             case 8: printf("\nseu dia de rodizio eh quinta-feira"); break;
             case 9:
             case 0: printf("\nseu dia de rodizio eh sexta-feira");break;
             }
      getch();
}
