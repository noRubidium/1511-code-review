// Author: 1511.tue-kora
// time: 7/03/2017
// Calculate the area of the rectangle specified by the user
// 0 -> running fine
// 1 -> panic negative input value
// 2 -> area zero
#include<stdio.h>
int main(void) {
  double length, width, area;
  printf("Please enter rectangle length: ");
  // -> wait for user's input
  scanf("%lf", &length);
  printf("Please enter rectangle width: ");
  scanf("%lf", &width);
  if (length < 0 || width < 0) {
    return 1;
  }
  // area <- length * width
  area = length * width;
  printf("Area = %lf\n", area);
  return 0;
}
