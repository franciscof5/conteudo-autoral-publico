#include <stdio.h>
#include <conio.h>

main()
{
      int a,b,c,d;
      float media;
      
      printf("Digite o valor da P1: ");
      scanf("%d" ,&a);
      printf("Digite o valor da P2: ");
      scanf("%d" ,&b);      
      printf("Digite o valor de T: ");
      scanf("%d" ,&c); 
      printf("Digite a quantidade de faltas: ");
      scanf("%d" ,&d);
      media = (a + b + c)/3;
      
      if (d<20 && media>7)
      {
                printf("Aluno Aprovado!!\n");
                printf("Média = %5.2f.", media);
                printf("Faltas = %d.", d);
                getch();
      }
      else
          {
           if (d>20 && media>7)
               {
                   printf("Aluno Reprovado por Faltas!!\n");
                   printf("Média = %5.2f.", media);
                   printf("Faltas = %d.", d);
                   getch();
               }
          else  
                 {
                 if (d<20 && media<7)
                    {
                     printf("Aluno Reprovado por Nota!!\n");
                     printf("Média = %5.2f.", media);
                     printf("Faltas = %d.", d);
                     getch();
                    }
                 else
                     {
                     printf("Aluno Reprovado por Nota e faltas!!\n");
                     printf("Média = %5.2f.", media);
                     printf("Faltas = %d.", d);
                     getch();
                     }
                 }
          }
}
