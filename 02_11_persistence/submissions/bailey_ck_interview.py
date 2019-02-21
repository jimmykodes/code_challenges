# Bailey Lind-Trefts 
# 02/19/2019
# CK Collab Interview




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

        


# Test persistence_class
p = persistence_class()

assert p.pers(4) == 0
assert p.pers(10) == 1
assert p.pers(25) == 2
assert p.pers(39) == 3
assert p.pers(77) == 4
assert p.pers(679) == 5
assert p.pers(6788) == 6
assert p.pers(68889) == 7
assert p.pers(2677889) == 8
assert p.pers(26888999) == 9
assert p.pers(3778888999) == 10
assert p.pers(277777788888899) == 11

# Test persistence function
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
