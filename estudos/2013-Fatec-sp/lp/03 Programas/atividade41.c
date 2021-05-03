#include <stdio.h>
#include <conio.h>
void ordena(int *c, int *d) {
    int e;
    if(*c > *d) {
          e = *c;
          *c = *d;
          *d = e;
          }
    }
main() {
       int a = 35, b = 4;
       ordena(&a, &b);
       printf("\n %d - %d", a, b);
       getch();
       }
          
