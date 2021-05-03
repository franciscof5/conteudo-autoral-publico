#include <stdio.h>
#include <conio.h>
#include "boolean.h"
main() {
       printf ("%s ", bool(not false));
       printf ("%s ", bool(false and true));
       printf ("%s", bool(true or false));
       getch();
       }
