#include <stdio.h>
#include <conio.h>
void strcat(char s[], char t[]) {
     int i, j;
     i= strlen(s);
    /* while (s[i] != \0) {
           i++; }
           ou */
    while (t[j] != '\0') { /* outra solucao strcpy(s + strlen(s), t); */
          s[i] = t[j];
          j++;
          i++; }
    s[i] = '\0' ;
    
