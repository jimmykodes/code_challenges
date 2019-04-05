def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


def pisano_period(divisor):
    i = 2
    pisano_array = []

    if divisor is 1:
        i = 0
        print(f"The Pisano Period for modulo {divisor} is: {i}")
        return i

    # minimum range the problem will allow to prevent 'list index out of range'
    for _, number in zip(range(26), fib()):
        pisano_array.append(number)
    while pisano_array[i] % divisor != 0:
        i += 1
    if pisano_array[i + 1] % divisor != 1:
        while pisano_array[i + 1] % divisor != 1:
            i += i
    print(f"The Pisano Period for modulo {divisor} is: {i}")
    return i


assert pisano_period(1) == 0
assert pisano_period(8) == 12
assert pisano_period(5) == 20
assert pisano_period(11) == 10
assert pisano_period(4) == 6
assert pisano_period(6) == 24
assert pisano_period(7) == 16
