import math

def double(arr):
	carry = 0
	arr.reverse()
	for i in range(len(arr)):
		doubled = arr[i]*2 + carry
		arr[i] = doubled % 10
		carry = int(math.floor(doubled/10))
	if carry:
		arr.append(carry)
	arr.reverse()
	return arr

def powersOfTwo(n):
	base = [1]
	for i in range(n):
		base = double(base)
	return base

print sum(powersOfTwo(1000))