sum = 0

# More efficient

for i in range(3,1000,3):
	sum = sum + i

for i in range(5,1000,5):
	if i % 3:
		sum = sum + i

print sum