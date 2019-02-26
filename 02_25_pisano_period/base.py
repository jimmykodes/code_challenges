def _make_fib_seq(max_num):
    fib_seq = [0, 1]
    for i in range(max_num):
        fib_seq.append(fib_seq[i] + fib_seq[i+1])
    return fib_seq


def _make_pisano_table(fib_seq, divisor):
    return [number % divisor for number in fib_seq]

# Assuming we run this as a script, set to the bare-minimum for the asserts; If not call it erytiem with what you need
FIB_SEQ = _make_fib_seq(25)


def pisano_period(divisor):
    pisano_table = _make_pisano_table(FIB_SEQ, divisor)
    if len(set(pisano_table)) == 1: return 0
    for i in range(len(pisano_table)):
        if pisano_table[i] == pisano_table[0] and i != 0 and i != len(pisano_table) - 1 and pisano_table[i+1] == pisano_table[1]:
            return i


assert pisano_period(1) == 0
assert pisano_period(8) == 12
assert pisano_period(5) == 20
assert pisano_period(11) == 10
assert pisano_period(4) == 6
assert pisano_period(6) == 24
assert pisano_period(7) == 16
