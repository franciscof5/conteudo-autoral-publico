#include <conio.h>
#include <stdio.h>
main() {
       float alt, altF = 0, maior = 0;
       char sex;
       int k, f = 0, m = 0;
       for (k=1; k<=10; k++) {
           do {
               printf("Digite o sexo: (f/m) ");
               scanf("%s", &sex);
               } while ((sex!='f') && (sex!='m'));          
           do {
               printf("Digite a altura corretamente: ");
               scanf("%f", &alt);
               } while (alt<=0);
           if (alt>maior) maior=alt;
           if (sex='f') {
                        f=f+1;
                        altF=altF+alt; }
           if (sex='m') m=m+1;
           }
       printf("A maior altura: %.2f\n", maior);
       printf("A media das alturas femininas: %.2f\n", altF=altF/f);
       printf("Qtde homens: %d", m);
       getch();
       }
           
