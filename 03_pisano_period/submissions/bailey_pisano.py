import json
import time


def pisano_period(divisor):

    # Other than pi(2), the pisano period is always even.
    if(divisor==1):
        return 0
    if(divisor==2):
        return 3
    i = 1
    j = 2
    count = 4
    while True:
        i = (i + j) % divisor
        j = (i + j) % divisor
        if(i == 0 and j == 1):
             return count
        count += 2

assert pisano_period(1) == 0
assert pisano_period(8) == 12
assert pisano_period(5) == 20
assert pisano_period(11) == 10
assert pisano_period(4) == 6
assert pisano_period(6) == 24
assert pisano_period(7) == 16


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for divisor, answer in answers:
        assert pisano_period(divisor) == answer, f'pisano_period({divisor}) = {pisano_period(divisor)} != {answer}'
    print(f'All tests passed in {time.time() - start:.4f} seconds')

# Uncomment for full test
full_test()