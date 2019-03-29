import json
import time

with open('./answers.json', 'r') as f:
    ANSWERS = json.loads(f.read())


def full_test(encode_func, decode_func):
    encode_start = time.time()
    for plaintext, shift, result in ANSWERS['encode']:
        answer = encode_func(plaintext, shift)
        assert answer == result, f'\nExpected: {result}\nReceived: {answer}'
    encode_duration = time.time() - encode_start
    print(f'Encode Tests passed in {encode_duration:05f} seconds')
    decode_start = time.time()
    for cypher_text, shift, result in ANSWERS['decode']:
        answer = decode_func(cypher_text, shift)
        assert answer == result, f'\nExpected: {result}\nReceived: {answer}'
    decode_duration = time.time() - decode_start
    print(f'Decode Tests passed in {decode_duration:05f} seconds')
    print(f'Full Test Passed in {encode_duration + decode_duration:05f} total seconds')
