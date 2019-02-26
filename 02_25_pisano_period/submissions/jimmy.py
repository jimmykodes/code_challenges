def pisano_period(divisor):
    """
    This can be done entirely independent of the Fibonacci sequence because the next number in a pisano sequence is always
    the remainder of the sum of the previous 2 digits divided by the divisor and a sequence always resets at [0, 1].
    """
    if divisor == 1:
        return 0
    sequence = [0, 1, 1]
    while sequence[-2:] != [0, 1]:
        sequence.append(sum(sequence[-2:]) % divisor)
    return len(sequence) - 2


assert pisano_period(1) == 0
assert pisano_period(8) == 12
assert pisano_period(5) == 20
assert pisano_period(11) == 10
assert pisano_period(4) == 6
assert pisano_period(6) == 24
assert pisano_period(7) == 16
