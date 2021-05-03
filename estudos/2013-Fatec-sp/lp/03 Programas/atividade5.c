
#include <stdio.h>
#include <conio.h>
main()
{
     char caracter;
     printf ("Digite um caracter:");
     scanf ("%c", &caracter);
     printf( "O codigo ASCII em octal eh %o, em decimal eh %d e em hexadecimal eh %x", caracter, caracter, caracter);
     getch ();
}
