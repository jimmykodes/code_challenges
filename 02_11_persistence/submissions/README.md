# All Submission

### Eric
```python
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
```

### Ted
```python
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
```

### Chris
```python
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
```

### Jimmy
```python
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
```

### Bailey
```python

# Persistence problem in the form of a Python class
class persistence_class:
    def __init__(self):
        self.n_rec = 0

    def pers(self, n):
        number_s = str(n)
        product = 1

        for character in number_s:
            product *= int(character)

        if n < 10:
            n_recursive = self.n_rec
            self.n_rec = 0
            return n_recursive
        else:
            self.n_rec += 1
            return self.pers(product)


# Persistence Interface Function
def persistence(num):
    return persistence_r(num, 0)


# Persistence Recursive Helper Function
def persistence_r(number, n_rec):
    number_s = str(number)
    product = 1

    for character in number_s:
        product *= int(character)

    if number < 10:
        return n_rec
    else:
        n_rec += 1
        return persistence_r(product, n_rec)
```
