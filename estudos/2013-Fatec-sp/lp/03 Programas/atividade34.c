#include <stdio.h>
#include <conio.h>
#define max 7
void obtem(float t[], int a) {
     int i;
     for(i=0; i<a; i++) {
        printf("\nDigite a %da temperatura:\n", i+1);
        scanf("%f", &t[i]); }
        }
float media(float t[], int a) {
      int i;
      float m=0;
      for(i=0; i<a; i++)
         m+= t[i];
      m/=i;
      return m;
      }
int conta(float t[], int a, float m) {
    int i, c=0;
    for(i=0; i<a; i++)
       if (t[i]>m) c++;
       return c;
    }

main() {
      float temp[max], m;
      obtem(temp, max);
      m = media(temp, max);
      printf("Estatistica: %d", conta(temp, max, m));
      getch();
      }
