largest = False
import math

def palindrome(number):
	number = str(number)

	for i in range(int(len(number)/2)):
		if number[i] != number[-1*i-1]:
			return False

	return True

for i in range(100,1000):
	for j in range(100,1000):
		prod = i * j
		if palindrome(prod) and prod > largest:
			largest = prod

print largest