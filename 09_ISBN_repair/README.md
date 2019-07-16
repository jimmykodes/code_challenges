# ISBN 10 Repair

The final digit of a ten digit ISBN is a checksum that makes the sum of all the digits multiplied by their position
in the ISBN (1 indexed) add up to an even multiple of 11.

## Example:
```
 ISBN: 0 3 0 6 4 0 6 1 5 2
Index: 1 2 3 4 5 6 7 8 9 10

(0 * 1) + (3 * 2) + (0 * 3) + (6 * 4) + (4 * 5) + (0 * 6) + (6 * 7) + (1 * 8) + (5 * 9) + (2 * 10)

0 + 6 + 0 + 24 + 20 + 0 + 42 + 8 + 45 + 20 = 165

165 / 11 = 15
```

This indexing of ISBNs allows us to not only calculate a check digit, but it will also allow us to repair a damaged
ISBN, as long as we know which digit is damaged.

## Example:

```
 ISBN: 0 3 0 6 4 0 6 ? 5 2
Index: 1 2 3 4 5 6 7 8 9 10

(0 * 1) + (3 * 2) + (0 * 3) + (6 * 4) + (4 * 5) + (0 * 6) + (6 * 7) + (? * 8) + (5 * 9) + (2 * 10)
```
Because we know _where_ it is broken, it is possible to repair the missing digit and return a valid ISBN:10 number.
(The how is up to you)

NOTE: The first nine digits of the ISBN will be 0-9, but the checksum digit can be 1-10. Because a 10 is 2 digits, it
is instead represented by `X`.

Write a function `validate` that takes in a string and has the following output:

* if the input string is a valid ISBN, it should return that ISBN
* if the input string is invalid but can be repaired (see examples below for irreparable ISBNs) repair the ISBN and return
the valid ISBN.
* if the string is invalid and _cannot_ be repaired, return `bool:False`

### Invalid ISBNs
```
Invalid but repairable
0306406?52 // the incorrect character can be anything BUT 1-9 or X

Invalid but NOT repairable
43038       // Too short
030640652   // One character too short. No way to know which position is missing
0306409652  // Not evenly divisible by 11, but no way to know which position is wrong
0306409652  // Not evenly divisible by 11, but no way to know which position is wrong
03?6406?52  // Missing two digits, potentially repairable? but outside the scope of this challenge
12345678910 // Too long
```


## Seeds
### Python
```python
import json
import time


def validate(isbn):
    # Your code here
    pass


# Tests
assert validate("0306406152") == "0306406152"
assert validate("03064z6152") == "0306406152"
assert validate("0!8001071X") == "078001071X"
assert validate("0306406") is False
assert validate("0306406153") is False
assert validate("030633406153") is False
print("Initial tests passed")


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for x, y in answers:
        assert validate(x) == y
    print(f'All tests passed in {time.time() - start:.4f} seconds')


# Uncomment to test
# full_test()

```

### Javascript
```javascript
let validate = isbn => {
    // Your code here
}

let assert = require('assert')
assert.strictEqual(validate("0306406152"), "0306406152")
assert.strictEqual(validate("03064z6152"), "0306406152")
assert.strictEqual(validate("0!8001071X"), "078001071X")
assert.strictEqual(validate("0306406"), false)
assert.strictEqual(validate("0306406153"), false)
assert.strictEqual(validate("030643306153"), false)

console.log('Initial Tests Passed')

let answers = require('./answers')
let full_test = () => {
    const start = new Date().getTime()
    answers.forEach(item => {
        let [x, y] = item
        assert.strictEqual(validate(x), y)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()
```


## Answers.json
```
[
  [isbn:string, correct isbn:string || false:bool]
]
```
