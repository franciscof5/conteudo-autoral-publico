
#include <stdio.h>
#include <conio.h>
main()
{
      float KM, L, CM;
      printf("Informe a quantidade de quilometros percorridos e a de litros gastos: ");
      scanf("%f %f", &KM, &L);
      CM = KM/L;
      printf("O consumo medio foi %.2f Km/l", CM);
      getch();
}
