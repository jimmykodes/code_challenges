from functools import reduce


# Eric
# =======================================================================================================
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
# =======================================================================================================


# Ted
# =======================================================================================================
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
# =======================================================================================================


# Chris
# =======================================================================================================
def persistence(number):
    str_var = str(number)
    counter = 0
    while len(str_var) > 1:
        new_list = 1
        var_list = []
        counter += 1
        for value in str_var:
            var_list.append(value)
        while var_list != []:
            first = int(var_list.pop(0))
            new_list = new_list * first
        if len(str(new_list)) > 1:
            str_var = str(new_list)

        else:
            return counter
    return counter
# =======================================================================================================


# Jimmy
# =======================================================================================================
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
# =======================================================================================================
