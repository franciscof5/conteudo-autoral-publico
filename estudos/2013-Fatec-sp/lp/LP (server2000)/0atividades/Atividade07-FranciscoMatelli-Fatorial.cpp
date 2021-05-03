//Exercício, Elaborar a função void fatorial(int n, inf *f). Teste a função.
#include <stdio.h>
#include <conio.h>

//int final;

int fatorial(int n, int *f);

int main() {
    int valor;
    int final;
    printf("Digite um valor para ser calculado o fatorial: ");
    scanf("%d", &valor);
    printf("O valor escolhido foi: %d", valor);
    
    fatorial(valor, &final);
    
    printf("\n O valor final seria: %d", final);
    
    getch();
}

int fatorial (int n, int *f) {
    int parcial = n-1;
    for(int i=n; i>0; i--) {
            printf("\n %d x %d...", i, parcial);
            parcial *= i;
    }
    *f = parcial;
    //resultado = *f;     
}
