#include <stdio.h>

int main() {

int sno, mdGrade, fGrade;
char name[50], subject[50];

printf("\tXYZ International College\n\t\t\t Makati City\n\n");

while (1) {

printf("Student Number: ");
scanf("%d", &sno);

getchar();
printf("Student Name: ");
fgets(name,sizeof(name), stdin);

printf("subject: ");
fgets(subject,sizeof(subject), stdin);


}
  return 0;
}