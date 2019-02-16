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


number = 4



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
