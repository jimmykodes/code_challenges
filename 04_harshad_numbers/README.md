## Harshad Number

A Harshad number is a number that is evenly divisible by the sum of its digits.

```
21 | 2 + 1 = 3 | 21 / 3 = 7.0 | 21 is a Harshad number
22 | 2 + 2 = 4 | 22 / 4 = 5.5 | 22 is NOT a Harshad number
```

Using the provided Harshad object, write 3 functions: `is_valid`, `get_next`, and
`get_series`.

`is_valid` takes in a positive integer and returns true if the number is a 
Harshad number, otherwise it returns false.
```
Harshad.is_valid(21) // returns true
Harshad.is_valid(22) // returns false
```
`get_next` takes in a positive integer and returns the _next_ Harshad number,
regardless of whether the number provided is, itself, a Harshad number.
```
Harshad.get_next(19) // returns 20
Harshad.get_next(21) // returns 24
```
`get_series` takes in 2 arguments, `start` and `length`, and returns an array
that begins at, but does not include, the given starting point, and is of the 
given length.
```
Harshad.get_series(19, 3) // returns [20, 21, 24]
```

## Seeds
### Python
```python
import json
import time


class Harshad:
    @staticmethod
    def is_valid(number):
        # return bool
        pass

    @staticmethod
    def get_next(number):
        # return int
        pass

    @staticmethod
    def get_series(start, length):
        # return array
        pass


# .is_valid tests
assert Harshad.is_valid(21) == True
assert Harshad.is_valid(73) == False
assert Harshad.is_valid(100) == True
print('.is_valid tests passed')

# .get_next tests
assert Harshad.get_next(13) == 18
assert Harshad.get_next(28) == 30
assert Harshad.get_next(46) == 48
print('.get_next tests passed')

# .get_series tests
assert Harshad.get_series(65, 11) == [70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111]
assert Harshad.get_series(143, 12) == [144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198]
assert Harshad.get_series(110, 10) == [111, 112, 114, 117, 120, 126, 132, 133, 135, 140]
print('.get_series tests passed')


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for n, answer in answers['is_valid']:
        assert Harshad.is_valid(n) == answer, f'Harshad.is_valid({n}) = {Harshad.is_valid(n)} != {answer}'
    for n, answer in answers['get_next']:
        assert Harshad.get_next(n) == answer, f'Harshad.get_next({n}) = {Harshad.get_next(n)} != {answer}'
    for start, length, answer in answers['get_series']:
        assert Harshad.get_series(start, length) == answer, f'Harshad.get_series({start}, {length}) = {Harshad.get_series(start, length)} != {answer}'
    print(f'Full tests passed in {time.time() - start:.4f} seconds')

# Uncomment for full tests
# full_test()

```

### Javascript
```javascript
let Harshad = {
    is_valid: (number) => {
        // return bool
    },
    get_next: (number) => {
        // return int
    },
    get_series: (start, length) => {
        // return array
    }
}

// Tests
/*************************************************************************************/

let assert = require('assert')
// .is_valid tests
assert.strictEqual(Harshad.is_valid(21), true)
assert.strictEqual(Harshad.is_valid(73), false)
assert.strictEqual(Harshad.is_valid(100), true)
console.log('.is_valid tests passed')

// .get_next tests
assert.strictEqual(Harshad.get_next(13), 18)
assert.strictEqual(Harshad.get_next(28), 30)
assert.strictEqual(Harshad.get_next(46), 48)
console.log('.get_next tests passed')

// .get_series tests
assert.deepEqual(Harshad.get_series(65,11), [70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111])
assert.deepEqual(Harshad.get_series(143,12), [144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198])
assert.deepEqual(Harshad.get_series(110, 10), [111, 112, 114, 117, 120, 126, 132, 133, 135, 140])
console.log('.get_series tests passed')

let full_test = () => {
    const answers = require('./answers')
    const start = new Date().getTime()

    /*****************************************************************/

    answers.is_valid.forEach(item => {
        let [x, y] = item
        assert.strictEqual(Harshad.is_valid(x), y)
    })
    /*****************************************************************/

    answers.get_next.forEach(item => {
        let [x, y] = item
        assert.strictEqual(Harshad.get_next(x), y)
    })

    /*****************************************************************/

    answers.get_series.forEach(item => {
        let [x, y, z] = item
        assert.deepEqual(Harshad.get_series(x, y), z)
    })
    console.log(`All tests passed in ${new Date().getTime() - start}ms`)

    /*****************************************************************/
}

// Uncomment for complete testing after passing initial tests
// full_test()

```

### Answers.json
```
{
"is_valid": [number:int, is a harshad number:bool],
"get_next": [number:int, next harshad number:int],
"get_series": [starting point:int, length:int, [array of harshad numbers:array(int)]]
}
```


