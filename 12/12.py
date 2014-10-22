import math

def factor(num):
  factors = []
  upper = int(math.ceil(math.sqrt(num)))
  if upper < 2:
    upper = 2

  for i in range(1,upper):
    if 1.0*num/i % 1 == 0:
      factors.append(i)
      if num > 1:
        factors.append(num/i)

  return factors

i = 1

factors = []

while len(factors) <= 500:
  tri = reduce(lambda x,y: x+y, range(1,i+1))

  i = i + 1
  factors = factor(tri)

print tri