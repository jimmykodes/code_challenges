import json
import time


def polygon_area(n):
    new_n = n**2
    old_n_squared = (n-1)**2
    return new_n + old_n_squared


assert polygon_area(1) == 1
assert polygon_area(2) == 5
assert polygon_area(3) == 13
assert polygon_area(4) == 25
print('All Tests Passed')


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for n, answer in answers:
        assert polygon_area(n) == answer, f'polygon_area({n}) = {polygon_area(n)} != {answer}'
    print(f'All tests passed in {time.time() - start:.4f} seconds')

# Uncomment for full test
# full_test()
