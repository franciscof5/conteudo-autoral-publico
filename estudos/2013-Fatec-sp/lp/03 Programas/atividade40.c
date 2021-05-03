#include <stdio.h>
#include <conio.h>
void meuPuts(char s[]) {
     int n, i;
     n = strlen(s) +1; /* nao recomendado */
     for(i=0; i<n; i++) /* nao recomendado */
     printf("%c", *(s+i)); /* melhor usar while (*(v+i) != '\0') {printf...} */
     printf("\n");
     }
main() {
       char string[60];
       puts("Digite uma string: ");
       gets(string);       
       meuPuts(string);
       getch();
       }   
     
