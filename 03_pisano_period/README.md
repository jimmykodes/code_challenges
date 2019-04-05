# Pisano Period

A Pisano period is the length at which a sequence of the remainders of a given number divided by each number in
the fibonacci sequence repeats.<sup>[1]</sup>

```
| Fibonacci          | 0 | 1 | 1 | 2 | 3 | 5 | | 8 | 13 | 21 | 34 | 55 | 89 |
|--------------------|---|---|---|---|---|---| |---|----|----|----|----|----|
| Pisano period of 4 | 0 | 1 | 1 | 2 | 3 | 1 | | 0 | 1  | 1  | 2  | 3  | 1  |
```
This table shows the Fibonacci sequence and the Pisano period of the number 4. You can see
by the break in the table where the pattern of the remainders repeats. For the entirety of the 
Fibonacci sequence (i.e. infinity) this pattern will _always_ remain the same for the given divisor.
The length of this pattern is that number's Pisano period, so the Pisano period of `4` would be `6`.

Write a function `pisano_period` that takes in a positive integer and returns the length
of its Pisano period. 

___
<sub>[1] The fibonacci sequence starts with `0, 1` and is calculated by adding the last 2 numbers of the sequence
to get the next number. `0, 1, 1, 2, 3, 5, 8, 13, etc.` since `1 + 1 = 2, 1 + 2 = 3, 3 + 2 = 5, and so on` </sub>

## Seeds
### Python
```python
import json
import time


def pisano_period(divisor):
    # Your code here
    pass


assert pisano_period(1) == 0
assert pisano_period(8) == 12
assert pisano_period(5) == 20
assert pisano_period(11) == 10
assert pisano_period(4) == 6
print('Initial tests passed')


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for divisor, answer in answers:
        assert pisano_period(divisor) == answer, f'pisano_period({divisor}) = {pisano_period(divisor)} != {answer}'
    print(f'All tests passed in {time.time() - start:.4f} seconds')

# Uncomment for full test
# full_test()

```

### Javascript
```javascript
let pisano_period = (divisor) => {
    // your code here
}

// Tests

let assert = require('assert')
assert.strictEqual(pisano_period(1), 0)
assert.strictEqual(pisano_period(8), 12)
assert.strictEqual(pisano_period(5), 20)
assert.strictEqual(pisano_period(11), 10)
assert.strictEqual(pisano_period(4), 6)
console.log('Initial tests passed')

let full_test = () => {
    const start = new Date().getTime()
    let answers = require('./answers')
    answers.forEach(item => {
        let [divisor, answer] = item
        assert.strictEqual(pisano_period(divisor), answer)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()

```

### Answers.json
```
[
    [divisor:int, length of pisano period:int]
]
```