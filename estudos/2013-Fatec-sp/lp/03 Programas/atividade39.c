#include <stdio.h>
#include <conio.h>
void carrega(float v[], int n) {
     int i;
     puts("Digite os numeros do vetor: \n");
     for(i=0; i<n; i++) 
              scanf("%f", &*(v+i) ); } /* (v+i) */

main() {
       float a[6];
       int i;
       carrega(a, 6);
       puts("No vetor: \n");
       for(i=0; i<6; i++) {
                printf("%.2f ", *(a+i) ); }
       getch();
       }
