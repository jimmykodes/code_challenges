# Flip cypher

This cypher is one of my favorites because the encoding and decoding processes are identical, so you don't have
to write 2 different functions to handle your plain text and cypher text differently. It's reversible!

The basic premise of the cypher is that each letter encodes as its opposite position: the second letter in the alphabet
encodes as the second to last letter in the alphabet.<br>
```
a = z
b = y
c = x
...
x = c
y = b
z = a
```
Write a function `flip` that takes in a string and returns a flipped version of that string.
```
foo bar => ull yzi
   and
ull yzi => foo bar
```
This cypher should handle punctuation like a champ:
```
foo, bar! => ull, yzi!
```
Capitalization, however, can be thrown out the window:
```
FoO bAR => ull yzi
```

## Seeds
### Python
```python
import json
import time


def flip(text):
    # Your code here
    pass

assert flip('foo bar') == 'ull yzi'
assert flip('Good News, Everyone!') == 'tllw mvdh, veviblmv!'
assert flip("ru uli zmb ivzhlm blf zivm'g xlnkovgvob hzgrhurvw, r szgv blf") == "if for any reason you aren't completely satisfied, i hate you"
assert flip("r wlm'g dzmg gl orev lm gsrh kozmvg zmbnliv") == "i don't want to live on this planet anymore"
assert flip("SHUT UP AND TAKE MY MONEY!") == "hsfg fk zmw gzpv nb nlmvb!"


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for input_text, answer in answers:
        assert flip(input_text) == answer, f'flip({input_text}) = {flip(input_text)} != {answer}'
    print(f'All tests passed in {time.time() - start:.4f} seconds')

```

### Javascript
```javascript
let flip = function (text) {
    // Your code here
}

// Tests

let assert = require('assert')
assert.strictEqual(flip('foo bar'), 'ull yzi')
assert.strictEqual(flip('Good News, Everyone!'), 'tllw mvdh, veviblmv!')
assert.strictEqual(flip("ru uli zmb ivzhlm blf zivm'g xlnkovgvob hzgrhurvw, r szgv blf"), "if for any reason you aren't completely satisfied, i hate you")
assert.strictEqual(flip("r wlm'g dzmg gl orev lm gsrh kozmvg zmbnliv"), "i don't want to live on this planet anymore")
assert.strictEqual(flip("SHUT UP AND TAKE MY MONEY!"), "hsfg fk zmw gzpv nb nlmvb!")
console.log('Initial tests passed')

let full_test = () => {
    const start = new Date().getTime()
    let answers = require('./answers')
    answers.forEach(item => {
        let [input, answer] = item
        assert.strictEqual(flip(input), answer)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()

```
### Answers.json
```
[
  [input:string, answer:string],
  ...
]
```
