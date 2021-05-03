#include <stdio.h>
#include <conio.h>
main() {
       int v[5] = {17, 29, 36, 44, 51};
       int i;
       for(i=0; i<5; i++) {
                printf("%p :", &v[i]);
                printf("%d \n", v[i]);
                }
       getch();
       }
