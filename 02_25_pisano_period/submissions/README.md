# All Submissions:
## Statistics:
```
Run time against 1500 item dataset with pisano periods of 8000+:
----------------------------------------------------------------
bailey | 0.088 seconds
 jimmy | 0.713 seconds
   ted | 7.672 seconds
 tyler | 15.41 seconds
  eric | 79.08 seconds
```
## Code:
### Bailey
```python
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
```
### Jimmy
```python
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
```
### Ted
```python
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
```
### Tyler
```python
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
```
### Eric
```python
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
```