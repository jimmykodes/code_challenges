import json
import math
import time


def survive(n):
    msb = 2**(math.floor(math.log2(n)))
    remainder = n - msb
    return 2 * remainder + 1


# Tests
assert survive(8) == 1
assert survive(23) == 15
assert survive(41) == 19
print("Initial tests passed")


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for x, y in answers:
        assert survive(x) == y
    print(f'All tests passed in {time.time() - start:.4f} seconds')


# Uncomment to test
full_test()