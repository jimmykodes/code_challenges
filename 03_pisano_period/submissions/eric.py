MAX_RANGE = 48  # at least twice as high as pattern length, so we can find match


def fib(iterations, a=0, b=1):
    for _ in range(iterations):
        yield a
        a, b = b, a + b


def pisano_period(divisor):
    if divisor == 1:  # is this kosher?
        return 0

    periods = [f % divisor for f in fib(MAX_RANGE)]

    for chunk_size in range(1, MAX_RANGE):
        patterns = {}
        # We should only have to check 2 chunks of period to determine if we hit a match
        for i in range(0, 2 * chunk_size, chunk_size):
            chunk = periods[i: i + chunk_size]
            hashed_period = hash(tuple(chunk))
            if hashed_period in patterns:
                return chunk_size
            else:
                patterns[hashed_period] = True


assert pisano_period(1) == 0
assert pisano_period(4) == 6
assert pisano_period(8) == 12
assert pisano_period(5) == 20
assert pisano_period(11) == 10
assert pisano_period(6) == 24
assert pisano_period(7) == 16
