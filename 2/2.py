fib = [1,2]

while fib[-1]+fib[-2] < 4000000:
	fib.append(fib[-1]+fib[-2])

evens = filter(lambda f: f % 2 == 0,fib)

print reduce(lambda a, b: a+b, evens)