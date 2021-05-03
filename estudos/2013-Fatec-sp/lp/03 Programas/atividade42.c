#include <stdio.h>
#include <conio.h>
void minimax(float v[], int n, float *a, float *b) {
     int i = 0;
     *b = 0;
     *a = *(v+i);
     for(i=0; i<n; i++) {
              if(*a > *(v+i)) *a = *(v+i);
              if(*b < *(v+i)) *b = *(v+i);
              }
     }
main() {
       float vetor[] = { 4.5, 4, 2, 6, 7, 4, 8};
       float x, y;
       minimax(vetor, 7, &x, &y);
       printf("\n %.2f - %.2f", x, y);
       getch();
       }       
