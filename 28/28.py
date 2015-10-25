def get_corners(size):
  # special case for center of spiral
  if size == 1:
    return [1]

  # upper-right corner is size^2
  # other three corners each subtract size - 1
  return map(lambda x: size * size - (size - 1) * x,range(4))

def corner_total(size):
  # size needs to be odd
  assert size % 2 == 1

  # odd numbers from 1 through size
  steps = range(1,size+1,2)

  # sum of corners from all steps
  return sum(map(lambda x: sum(get_corners(x)),steps))

print corner_total(1001)