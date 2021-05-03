#include <stdio.h>
#include <conio.h>
typedef struct {
        char nome[21];
        char matricula[9];
        float mediaf;
        } registro;

void LeAlunos(registro v[], int n) {
     int i;
     for(i=0; i<n; i++) {
              printf("\nDigite os dados do %do aluno:\n", i+1);
              puts("\nnome: "); scanf("%s", &v[i].nome);
              puts("\nmatricula: "); scanf("%s", &v[i].matricula);
              puts("\nmedia: "); scanf("%f", &v[i].mediaf); }
              }

void Imprime(registro v[], int n) {
     int i;
     for(i=0; i<n; i++) {
              printf("\n%do aluno: %s - %s - %.2f\n", i+1, v[i].nome, v[i].matricula, v[i].mediaf); }
              }
              
main() {
       registro t[5];
       LeAlunos(t, 5);
       Imprime(t, 5);
       getch();
       }
     
