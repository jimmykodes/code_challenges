import json
import time

with open('./submissions/answers.json') as f:
    answers = json.loads(f.read())


def full_test(func):
    start = time.time()
    for x, y in answers:
        assert func(x) == y, f'f({x}) = {func(x)} != {y}'
    print(f'All test passed in {time.time() - start} seconds')
