#include <conio.h>
#include <stdio.h>
#include <string.h>
main() {
       char x[] = "um";
       char y[] = "um";
       /* clrscr()*/
       printf("%s == %s ? \t", x, y);
       /* printf("%s", (x == y ? "V" : "F") );  est� comparando apenas endere�os de mem�rias */
       printf("%s", (strcmp(x,y)==0? "V" : "F"));
       getch();
       }
