#include <stdio.h>
#include <conio.h>

main()
{
      int dia,mes,ano, diames, y, t, u, k, resultado;
      
      
      printf("Digite o dia de seu nascimento: ");
      scanf("%d" ,&dia);
      printf("Digite o mes de seu nascimento: ");
      scanf("%d" ,&mes);      
      printf("Digite o ano de seu nascimento: ");
      scanf("%d" ,&ano);
      diames = (dia*100) + mes;
      y = diames + ano;
      t = y/100;
      u = y%100;
      k = t + u;
      resultado = k % 5;
      if (resultado == 0)
         {
         printf("Você tem o perfil Tímido.");
         getch();
         }
      if (resultado == 1)
         {
         printf("Você tem o perfil Sonhador.");
         getch();
         }
      if (resultado == 2)
         {
         printf("Você tem o perfil Paquerador.");
         getch();
         }
      if (resultado == 3)
         {
         printf("Você tem o perfil Atraente.");
         getch();
         }
      if (resultado == 4)
         {
         printf("Você tem o perfil Irresistível.");
         getch();
         }
}
