#include <stdio.h>
#include <conio.h>

int main () {
     struct {
            int dia;
     } data;
     data.dia = 10;
     printf("Dia %d", data.dia);
     getch();
}
