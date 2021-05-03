#include <stdio.h>
#include <conio.h>
#define eh_minuscula(c) ((c>='a') && (c<='z')? 1:0)
#define eh_maiuscula(c) ((c>='A') && (c<='Z')? 1:0)
#define dist ('A' - 'a')
#define minuscula(c) (eh_maiuscula(c)? ((c)-(dist)):c) /* ((c) + 'A' - 'a') */
#define maiuscula(c) (eh_minuscula(c)? ((c)+(dist)):c) /* ((c) + 'a' - 'A') */
main() {
       char letra1 = 'f';
       char letra2 = 'D';
       printf ("%d ", eh_minuscula('Y'));
       printf ("%d ", eh_maiuscula(letra2));
       printf ("%c ", maiuscula(letra1));
       printf ("%c ", minuscula(letra2));
       printf ("%c ", minuscula('b'));
       printf ("%c", maiuscula('G'));
       /* resposta: 0 1 F d b G */
       getch();
       }
