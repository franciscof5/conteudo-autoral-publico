#include <stdio.h>
#include <conio.h>
int validaData(unsigned int d, unsigned int m,unsigned int a) {
    int m29;
    if (a % 4 == 0) m29 = 29;
    if ((a % 100 == 0) && (a % 400 != 0)) m29 = 28;
    if ((d<1) || (d>31) || (m<1) || (m>12)) return 0;
    if (((m==4) || (m==6) || (m==9) || (m==11)) && (d>30)) return 0;
    if ((m==2) && (d>29)) return 0;
    return 1;     }
    
main() {
       unsigned int d, m, a;
       printf("Digite uma data desmenbrada:\n");
       scanf("%u %u %u", &d, &m, &a);
       printf("A data eh %s", validaData(d, m, a) == 0 ? "invalida": "valida");
       getch();
       }
       
       
