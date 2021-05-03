#include <conio.h>
#include <stdio.h>
#include <string.h>
main() {
       char x[] = "um";
       char y[] = "um";
       /* clrscr()*/
       printf("%s == %s ? \t", x, y);
       /* printf("%s", (x == y ? "V" : "F") );  está comparando apenas endereços de memórias */
       printf("%s", (strcmp(x,y)==0? "V" : "F"));
       getch();
       }
