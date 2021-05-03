#include <stdio.h>
#include <conio.h>
main() {
       char *p;
       char y;
       char x='A';
       
       p = &x;
       *p = 'B';
       y = *p;
       *p = 'C';
       
       printf("\n x = %c \t y = %c", x, y);
       printf("\n &x = %p \t &y = %p", &x, &y);
       printf("\n p = %p \t *p = %c", p, *p);
       
       getch();
       }
