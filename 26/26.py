# Tried approaching with multiplicative order:
# http://mathworld.wolfram.com/DecimalExpansion.html
# But couldn't make it work for cycles with offsets (e.g. 0.1666)

# Determine with long division
def find_cycle_length(num,denom):
  pairs = []
  remainder = None
  quotient = None
  divisor = denom

  while remainder != 0:

    # First operation
    if remainder is None:
      dividend = num
    # Remainder from last operation
    else:
      dividend = remainder * 10

    new_pair = (dividend,divisor)

    # If this divisor/dividend pair has come up before
    # We're at the start of another cycle
    for i,pair in enumerate(pairs):
        if new_pair == pair:
            return len(pairs) - i

    quotient = dividend / divisor
    remainder = dividend % divisor

    pairs.append(new_pair)

  # Remainder hit zero, non-repeating
  return 0

# Comparator for max()
def key(tup):
    return tup[1]

results = map(lambda x: (x,find_cycle_length(10,x)),range(2,1000))

print max(results,key=key)[0]
