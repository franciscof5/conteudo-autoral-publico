//Programa que registra a temperatura média de cada dia da semana
#include <stdio.h>
#include <conio.h>
#include <string.h>

#define TOTAL_DIAS_SEMANA 5
#define DIA temperaturas_dias_semana[i]
main () {
     int temperaturas_dias_semana[TOTAL_DIAS_SEMANA];
     int i;
     int total_temps = 0;
     int media;
     
     for(i=0;i<=TOTAL_DIAS_SEMANA;i++) {
          printf("Digite a temperatura do dia %d:", i);
          //getch();
          scanf("%d", &DIA);
     }
     
     printf("\n \n Os valores armazenados sao");
     
     for(i=0;i<=TOTAL_DIAS_SEMANA;i++) {
          printf("\n Dia %d temperatura %d", i, DIA);
     }
     
     printf("\n \n Calculando media...");
     
     for(i=0;i<=TOTAL_DIAS_SEMANA;i++) {
          total_temps += DIA;
          printf("\n Somando %d, parcial de %d", DIA, total_temps);
     }
     media = total_temps/(TOTAL_DIAS_SEMANA+1);
     printf("\n \n A media de temperaturas seria:");
     printf(" %d : ", media);
     
      for(i=0;i<=TOTAL_DIAS_SEMANA;i++) {
          if(DIA<media)
          printf("\n O dia %d teve temperatura abaixo da media", i);
     }
     
     printf("\n\nPressione enter para encerrar o programa, obrigado pela paciencia");
     
     getch();
}
