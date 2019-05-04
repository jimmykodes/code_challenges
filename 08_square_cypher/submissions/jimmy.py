import math
import re
import json
import time


def transposed(plaintext):
    plaintext = re.sub(' ', 'X', plaintext.upper())
    cypher_text = []
    char_list = re.findall(r'[A-Z]', plaintext)
    root = int(math.sqrt(len(char_list)))
    if len(char_list) > root ** 2:
        root += 1
    square = root ** 2
    while len(char_list) < square:
        char_list.append('X')
    index = 0
    while len(cypher_text) < len(char_list):
        cypher_text.append(char_list[index])
        index += root
        if index >= square:
            index -= square - 1
    return ''.join(cypher_text)


# Tests
assert transposed("The eagle flies at midnight!") == "TGIXGXHLEMHXEESITXXXXDXXEFANXXALTIXX"
assert transposed("The horse is in the barn, and it's a very big barn") == "TSNAXVGHEXRIEXEXTNTRBXIHXSYAHSEAXXROXXNABNRIBDXIX"
assert transposed("WECEXEXODXXDVXXAIEXXRSRXX") == "WEXAREXDISCOVEREDXXXXXXXX"
assert transposed("CROEMHOEXFITDETCDXENOONXXXXNIXGGDXGX") == "CODEXGREENXGOXTOXDEFCONXMIDNIGHTXXXX"
print("Initial tests passed")


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for x, y in answers:
        assert transposed(x) == y
    print(f'All tests passed in {time.time() - start:.4f} seconds')


# Uncomment to test
full_test()
