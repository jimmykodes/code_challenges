# Shift Cypher

A shift cypher is a simple encoding technique that shifts letters down the alphabet a given distance.<br>
`'a' -5-> 'f'`<br>

Write 2 functions `encode` and `decode`.

`encode` takes in a string: `plaintext` and an integer: `shift` and shifts all the letters of the plain text
the given shift distance down the alphabet to return an encoded message.

`decode` takes in a string: `cypher_text` and an integer: `shift` and shifts all the letters of the cypher text
the given shift distance back up the alphabet to return a decoded message.

Both functions should preserve capitalization and punctuation. And in both cases `shift` can be a positive or
negative number, and can have an absolute value > 26. If shifting further than 26, the shift distance should
'wrap' the alphabet, i.e. `'z' -27-> 'a'`

## Seeds
### Python
```python
import json
import time
def encode(plaintext, distance):
    return 'string'

def decode(cyphertext, distance):
    return 'string'


# Basic Test
assert encode('Identity theft is not a joke, Jim!', 5) == "Nijsynyd ymjky nx sty f otpj, Onr!"
assert encode('Bears, beets, Battlestar Galactica', 30) == "Fievw, fiixw, Fexxpiwxev Kepegxmge"
assert encode('I want people to be afraid of how much they love me.', 8) == "Q eivb xmwxtm bw jm inziql wn pwe uckp bpmg twdm um."
print('Encode Tests Passed')

assert decode('Z bevn vortkcp nyrk kf uf. Slk ze r dlty dfiv ivrc jvejv, Z yru ef zuvr nyrk kf uf.', 17) == 'I knew exactly what to do. But in a much more real sense, I had no idea what to do.'
assert decode("L grq'w kdwh lw. L mxvw grq'w olnh lw dw doo dqg lw'v whuuleoh", 3) == "I don't hate it. I just don't like it at all and it's terrible"
assert decode('Ufm gq Hsqrgac Zcytcp?', 24) == "Who is Justice Beaver?"
print('Decode Tests Passed')


def full_test():
    with open('./answers.json', 'r') as f:
        answers = json.loads(f.read())
    encode_start = time.time()
    for plaintext, shift, result in answers['encode']:
        answer = encode(plaintext, shift)
        assert answer == result, f'\nExpected: {result}\nReceived: {answer}'
    encode_duration = time.time() - encode_start
    print(f'Encode Tests passed in {encode_duration:05f} seconds')
    decode_start = time.time()
    for cypher_text, shift, result in answers['decode']:
        answer = decode(cypher_text, shift)
        assert answer == result, f'\nExpected: {result}\nReceived: {answer}'
    decode_duration = time.time() - decode_start
    print(f'Decode Tests passed in {decode_duration:05f} seconds')
    print(f'Full Test Passed in {encode_duration + decode_duration:05f} total seconds')

# Uncomment for full test
# full_test()

```

### Javascript
```javascript
let encode = (plaintext, distance) => {

}

let decode = (cyphertext, distance) => {

}


// Basic Test
let assert = require('assert')
assert.strictEqual(encode('Identity theft is not a joke, Jim!', 5), "Nijsynyd ymjky nx sty f otpj, Onr!")
assert.strictEqual(encode('Bears, beets, Battlestar Galactica', 30), "Fievw, fiixw, Fexxpiwxev Kepegxmge")
assert.strictEqual(encode('I want people to be afraid of how much they love me.', 8), "Q eivb xmwxtm bw jm inziql wn pwe uckp bpmg twdm um.")
console.log('Encode Tests Passed')

assert.strictEqual(decode('Z bevn vortkcp nyrk kf uf. Slk ze r dlty dfiv ivrc jvejv, Z yru ef zuvr nyrk kf uf.', 17), 'I knew exactly what to do. But in a much more real sense, I had no idea what to do.')
assert.strictEqual(decode("L grq'w kdwh lw. L mxvw grq'w olnh lw dw doo dqg lw'v whuuleoh", 3), "I don't hate it. I just don't like it at all and it's terrible")
assert.strictEqual(decode('Ufm gq Hsqrgac Zcytcp?', 24), "Who is Justice Beaver?")
console.log('Decode Tests Passed')


let full_test = () => {
    const answers = require('./answers')
    const start = new Date().getTime()
    answers.encode.forEach(item => {
        let [plaintext, distance, cyphertext] = item
        assert.strictEqual(encode(plaintext, distance), cyphertext)
    })
    console.log('All encode tests passed')
    answers.decode.forEach(item => {
        let [cyphertext, distance, plaintext] = item
        assert.strictEqual(decode(cyphertext, distance), plaintext)
    })
    console.log('All decode tests passed')
    console.log(`All tests passed in ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()

```

### Answers.json
```
{
    "encode": [[plaintext:string, shift distance:int, cyphertext:string],...],
    "decode": [[cyphertext:string, shift distance:int, plaintext:string],...],
}
```