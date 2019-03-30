import json
import time


def persistence(number):
    persistence_counter = 0
    num = str(number)
    while len(num) > 1:
        product = 1
        for n in num:
            product *= int(n)
        num = str(product)
        persistence_counter += 1
    return persistence_counter


# Tests
assert persistence(4) == 0
assert persistence(10) == 1
assert persistence(39) == 3
assert persistence(679) == 5
assert persistence(68889) == 7
assert persistence(26888999) == 9
assert persistence(3778888999) == 10
assert persistence(277777788888899) == 11


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for x, y in answers:
        assert persistence(x) == y
    print(f'All tests passed in {time.time() - start:.4f} seconds')


# Uncomment to test
full_test()
