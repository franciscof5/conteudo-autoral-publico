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
       unsigned int d, m, a, k, j, z, w;
       do {
           printf("Infome a data de nascimento corretamente: \n");
           scanf("%u %u %u", &d, &m, &a);
           } while (validaData(d, m, a)==0);
       d = d * 100;
       j = d + m;
       k = j + a;
       z = k%100;
       w = k/100;
       k = z + w;
       j = k%5;
       switch(j) {
                 case(0): printf("Perfil: Timido"); break;
                 case(1): printf("Perfil: Sonhador"); break;
                 case(2): printf("Perfil: Paquerador"); break;
                 case(3): printf("Perfil: Atraente"); break;
                 case(4): printf("Perfil: Irresistivel"); break;
                 }
       getch();
       }
       
