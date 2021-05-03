#include <stdio.h>
#include <conio.h>
#define max 10

void leNotas(float n[], int a) {
     int i;
     printf("Informe as notas:\n ");
     for(i=0; i<a ; i++) {
       printf("%d o aluno: ", i+1);
       scanf("%f", &n[i]); }
       }
void imprime(float n[], int a) {
     int i;
     printf("\nAs notas:");
     for(i=0; i<max; i++)
       printf("\n%d o aluno: %.2f", i+1, n[i]);
     }
       
main() {
       float t[max], m;
       leNotas(t, max);
       imprime(t, max);
       getch();
       }
       
       
