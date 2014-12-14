import math

def multiply(arr,n):
	carry = 0
	arr.reverse()
	for i in range(len(arr)):
		multiplied = arr[i]*n + carry
		arr[i] = multiplied % 10
		carry = int(math.floor(multiplied/10))
	arr.reverse()
	if carry:
		add = []
		for dig in str(carry):
			add.append(int(dig))
		arr = add + arr
	return arr

start = [1]

for i in range(1,101):
	start = multiply(start,i)

print sum(start)