import sys,math

digits = [0,1,2,3,4,5,6,7,8,9]

def next_permutation(arr):
  lasti = len(arr) - 1
  i = lasti
  while i > 0 and arr[i - 1] >= arr[i]:
    i = i - 1
  if i <= 0:
    return arr
    
  j = lasti
  while arr[j] <= arr[i - 1]:
      j -= 1
  arr[i - 1], arr[j] = arr[j], arr[i - 1]
    
  arr[i:] = arr[lasti:i - 1:-1]
  return arr

permutations = 1

while permutations < 1000000:
  permutation = next_permutation(digits)
  permutations = permutations + 1

print "".join(map(lambda x: str(x),permutation))