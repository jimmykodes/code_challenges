"""Write a function persistence that takes in a positive integer and returns the number's multiplicative persistence,
defined as the number of times the digits of times the digits of the number must be multiplied together (recursively)
to reach a single digit number.


Take all digits from number
Multiply them together
Produce some new number
Repeat this until it's a single digit number
"""
from functools import reduce


def persistence(number, tries=0):
    if number < 10:
        return tries

    # Version: I went to college for this
    total = reduce(lambda x, y: x * y, map(int, str(number)))

    # Version: Simple
    # total = 1
    # for digit in str(number):
    #     total *= int(digit)

    return persistence(total, tries + 1)




# Tests
assert persistence(4) == 0
assert persistence(10) == 1
assert persistence(25) == 2
assert persistence(39) == 3
assert persistence(77) == 4
assert persistence(679) == 5
assert persistence(6788) == 6
assert persistence(68889) == 7
assert persistence(2677889) == 8
assert persistence(26888999) == 9
assert persistence(3778888999) == 10
assert persistence(277777788888899) == 11
