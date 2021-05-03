#include<conio.h>
#include<stdio.h>
main() {
     int num, soma = 0;
     printf ("digite uma sequencia terminada por zero\n");
     do {
        scanf("%d", &num);
        soma = soma + num;
        } while (num != 0);
     printf("Soma da sequencia = %d\n", soma);
     getch ();
}
     
     
