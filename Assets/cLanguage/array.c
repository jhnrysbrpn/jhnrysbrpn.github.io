#include <stdio.h>

#define MIN(x,y) ((x<y)?x:y)

int main()
{
	int a,b,min;
	
	printf("Enter first number: ");
	scanf("%d",&a);
	printf("Enter second number: ");
	scanf("%d",&b);	
	
	min=MIN(a,b);
	printf("Minimum number is: %d\n",min);
	
	return 0;
}


