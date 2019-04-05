# Interesting Polygons

Write a function `polygon_area` that takes in a positive integer `n` and returns the number of 'pixels' the polygon
will occupy given `n` number of layers.

The polygons are shaped as follows:
```

| 1 Layer  | 2 Layers  | 3 Layers  |
|----------|-----------|-----------|
|          |           |     x     |
|          |     x     |   x x x   |
|    x     |   x x x   | x x x x x |
|          |     x     |   x x x   |
|          |           |     x     |
|----------|-----------|-----------|
|  Area 1  |  Area 5   |  Area 13  |

```

## Seeds
### Python
```python
import json
import time


def polygon_area(n):
    # Your code here
    pass


assert polygon_area(1) == 1
assert polygon_area(2) == 5
assert polygon_area(3) == 13
assert polygon_area(4) == 25
print('Initial tests passed')


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for n, answer in answers:
        assert polygon_area(n) == answer, f'polygon_area({n}) = {polygon_area(n)} != {answer}'
    print(f'All tests passed in {time.time() - start:.4f} seconds')

# Uncomment for full test
# full_test()

```

### Javascript
```javascript
let polygon_area = (n) => {
    // your code here
}

// Tests

let assert = require('assert')
assert.strictEqual(polygon_area(1), 1)
assert.strictEqual(polygon_area(2), 5)
assert.strictEqual(polygon_area(3), 13)
assert.strictEqual(polygon_area(4), 25)
console.log('Initial tests passed')

let full_test = () => {
    const start = new Date().getTime()
    let answers = require('./answers')
    answers.forEach(item => {
        let [n, answer] = item
        assert.strictEqual(polygon_area(n), answer)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()

```

### Answers.json
```
[
    [number of layers:int, area:int]
]
```
