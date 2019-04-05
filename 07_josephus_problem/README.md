# The Josephus Problem

Josephus was a historian who lived in the first century CE. The story goes, he and a group of Jewish soldiers were
surrounded by the Roman army. They decided to devise a system to avoid being captured, but also avoid suicide. What
they decided was to arrange themselves in a circle and each man would go around the circle and kill the man to his
right. And the remaining man would commit suicide.
```
|  Stage 1  ||  Stage 2  ||  Stage 3  ||  Stage 4  |
|-----------||-----------||-----------||-----------|
|     1     ||     1     ||     1     ||     1     |
|   8   2   ||   x   x   ||   x   x   ||   x   x   |
| 7       3 || 7       3 || x       x || x       x |
|   6   4   ||   x   x   ||   x   x   ||   x   x   |
|     5     ||     5     ||     5     ||     x     |
|-----------||-----------||-----------||-----------|
|   Steps   ||   Steps   ||   Steps   ||   Steps   |
| 1 -x-> 2  || 1 -x-> 3  || 1 -x-> 5  || 1 -x-> 1  |
| 3 -x-> 4  || 5 -x-> 7  ||           ||           |
| 5 -x-> 6  ||           ||           ||           |
| 7 -x-> 8  ||           ||           ||           |
```
Josephus decided he would rather surrender than die, so he needed to work out where in the circle he needed to stand
in order to be the last man alive.

Write a function `survive(n)` where `n:int > 0` and represents the number of people in the circle and it 
returns the position Josephus needs to stand in so that he remains the last man alive.

The circle is 1-indexed.

## Seeds
### Python
```python
import json
import time


def survive(n):
    # Your code here
    pass


# Tests
assert survive(8) == 1
assert survive(23) == 15
assert survive(41) == 19
print("Initial tests passed")

def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for x, y in answers:
        assert survive(x) == y
    print(f'All tests passed in {time.time() - start:.4f} seconds')


# Uncomment to test
# full_test()

```

### Javascript
```javascript
let survive = n => {
    // Your code here
}

let assert = require('assert')
assert.strictEqual(survive(8), 1)
assert.strictEqual(survive(23), 15)
assert.strictEqual(survive(41), 19)
console.log('Initial Tests Passed')

let answers = require('./answers')
let full_test = () => {
    const start = new Date().getTime()
    answers.forEach(item => {
        let [x, y] = item
        assert.strictEqual(survive(x), y)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()
```


## Answers.json
```
[
  [number of people in the circle:int, position of survivor:int]
]
```
