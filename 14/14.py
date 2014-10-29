def next_number(num):
	if num % 2:
		return 3*num+1
	return num/2

def chain_length(num):
	s = str(num)
	if s in known:
		return known[s]
	return 1+chain_length(next_number(num))

known = {}

known["1"] = 1

max_length = 0
max_number = 0

for i in range(500001,1000000,2):
	l = chain_length(i)
	known[i] = l
	
	if l > max_length:
		max_length = l
		max_number = i

print max_number