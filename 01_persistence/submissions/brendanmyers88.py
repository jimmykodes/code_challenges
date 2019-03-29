from functools import reduce


def get_digits(number):
    """Generates digits of the number without type coercion via .split() and looping through an array"""
    while number:
        digit = number % 10
        yield digit

        # Remove the last digit from number and continue the loop
        # until number has no more digits to yield for the generator function
        number //= 10


def persistence(number, counter=0):
    if number < 10:
        return counter

    # get new number by multiplying digits of a number
    new_number = reduce(lambda x, y: x * y, get_digits(number))

    return persistence(new_number, counter + 1)


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
