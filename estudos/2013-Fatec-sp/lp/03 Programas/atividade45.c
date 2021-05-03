#include <stdio.h>
#include <conio.h>
#include <math.h>
typedef struct {
        float x;
        float y;
        } ponto;

float distancia(float a1, float b1, float a2, float b2) {
      float n;
      n = sqrt((((a2)-(a1))*((a2)-(a1))) + (((b2)-(b1))*((b2)-(b1))));
      return n;
      }
      
main() {
       ponto pto1, pto2;
       puts("Digite o 1o ponto: ");
       scanf("%f", &pto1.x);
       scanf("%f", &pto1.y);
       puts("Digite o 2o ponto: ");
       scanf("%f", &pto2.x);
       scanf("%f", &pto2.y);
       printf("A distancia entre os pontos eh: %.2f", distancia(pto1.x, pto1.y, pto2.x, pto2.y));
       getch();
       }
