#include <stdio.h>
#include <conio.h>
main() {
       float A[10][3];
       int i, j, m=0;
       for(i=0; i<10; i++) {
                for(j=0; j<2; j++) {
                         printf("Aluno %d - Nota %d: ", i+1, j+1);
                         scanf("%f", &A[i][j]); }
                A[i][2] = (A[i][0] + A[i][1])/2;
                m = m + A[i][2]; }
       m/=i;
       for(i=0; i<10; i++) {
                printf("Media do aluno %d: %.2f\n", i+1, A[i][2]);
                if (A[i][2]<m) printf("Abaixo da media da classe.\n");
                else if (A[i][2]==m) printf("Na media da classe.\n");
                else printf("Acima da media da classe! Parabens!\n"); }                        
       /* for(i=0; i<10; i++) {
                printf("\n");
                for(j=0; j<3; j++) 
                   printf("%.2f ", A[i][j]);
                   } */
       getch();
       }
