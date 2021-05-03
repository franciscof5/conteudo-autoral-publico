#include <conio.h>
#include <stdio.h>

long int fat (unsigned a)
{
     long int f = 1;
     while (a > 0 ){
           f=a*f;
           a= a-1;
           }
     /* int fat (int n){
     for(i=n;i>0;i--)
       f=f*i;
     return f; }  */
     return f;
}
