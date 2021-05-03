#include <stdio.h>
#include <conio.h>
main() {
       float A[10][3];
       int i, j;
       for(i=0; i<10; i++) {
                for(j=0; j<2; j++) {
                         printf("Aluno %d - Nota %d: ", i+1, j+1);
                         scanf("%f", &A[i][j]); }
                A[i][2] = (A[i][0] + A[i][1])/2; }
       for(i=0; i<10; i++) {
                printf("\n");
                for(j=0; j<3; j++) 
                   printf("%.2f ", A[i][j], "\t");
                   }
       getch();
       }
