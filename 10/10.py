def sieve(n):
  array = map(lambda x: True,range(n+1))

  array[0] = False
  array[1] = False

  for i in range(2,n+1):
    if array[i]:
      for p in range(i+i,n+1,i):
        array[p] = False

  primes = [];

  for i in range(n+1):
    if array[i]:
      primes.append(i)

  return primes

print sum(sieve(2000000))