#include <stdio.h>
#include <conio.h>
/*record em pascal = struct em C 
-> exemplo de estrutura anônima - a que a gente cria (typedef) */

typedef struct {
        int dia;
        int mes;
        int ano;
} DATA;

typedef struct {
        char nome[50];
        char fone[50];
        DATA nasc;
} PESSOA;

main() {
       PESSOA amigo;
       puts("\nDigite os dados (nome/tel/nascimento) do seu amigo:\n");
       gets(amigo.nome);
       gets(amigo.fone);
       scanf("%d", &amigo.nasc.dia);
       scanf("%d", &amigo.nasc.mes);
       scanf("%d", &amigo.nasc.ano);
       printf("Os dados: %s ; %s ; %02d/%02d/%04d", amigo.nome, amigo.fone, amigo.nasc.dia, amigo.nasc.mes, amigo.nasc.ano);
       getch();
}

/* sujeira no buffer de dados do teclado???? */
