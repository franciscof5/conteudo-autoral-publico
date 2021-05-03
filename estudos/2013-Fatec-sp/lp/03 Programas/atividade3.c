
#include <stdio.h>
#include <conio.h>
#include <math.h>
#define PI 3.1415
main()
{
     float R, area, perimetro;
     printf ("Digite o raio do circunferencia: \n");
     scanf ("%f", &R);
     area = PI*pow(R,2);
     perimetro = 2*PI*R;
     printf("A area da circunferencia eh %.2f e seu perimetro eh %.2f .", area, perimetro);
     getch ();
}
