# Assignment 1.1: Recalling Python Functions

num = int(input(" Please Enter a Number: "))
total = 0
for i in range(1, num):
    if(num % i == 0):
        total = total + i
if (total == num):
    print(" %d is a Perfect Number" %num)
else:
    print(" %d is not a Perfect Number" %num)