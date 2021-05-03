//Exercício em aula, Francisco Matelli, 13100587
//2013-09-03
#include <stdio.h>
#include <conio.h>
#include "macroex.h"

int fatorial (int n);
int potencia (int n);

//para testar as funções 
main () {
     int x;
     printf("Programa exercicio com funcao");
     printf("\nDigite um valor numerico inteiro: ");
     scanf("%d", &x);
     printf("\nO proximo valor seria: %d", prox(x));
     getch();
     printf("\nO fatorial seria: %d", fatorial(x));
     getch();
     printf("\nA potencial seria seria: %d", potencia(x));
     printf("\n\nMuito obrigado pela sua atencao, pressione ENTER para encerrar o programa");
     getch();
}

//Calcular o fatorial de um valor inteiro.
int fatorial (int n) {
      long cont=1, f=1;
      for(cont=1;cont<=n;cont++) {
            f*=cont;
            printf("\nCalculando fatorial para %d: %d", cont, f);
      }
      return(f);
}

//Calcular o valor da potência.
int potencia (int n) {
         return (n*n);
}
