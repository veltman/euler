def factor(num):
  for i in range(2,num):
    if 1.0*num/i % 1 == 0:
      return [factor(i),factor(num/i)]
  return num

i = 1

def flatten(arr):
  new = []
  if isinstance(arr,list):
    for each in arr:
      if isinstance(each,list):
        new += flatten(each)
      else:
        new.append(each)
  else:
    new.append(arr)
  return new

factors = []

while i < 4:
  tri = reduce(lambda x,y: x+y, range(1,i+1))

  i = i + 1
  factors = flatten(factor(tri))

  print tri
  print factors