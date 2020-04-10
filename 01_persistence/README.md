# Multiplicative persistence

Write a function `persistence` that takes in a positive integer and 
returns the number's multiplicative persistence, defined as the number of times the digits
of the number must be multiplied
together (recursively) to reach a single digit number.

```
persistence(39) // returns 3
// Because 3 * 9 = 27, 2 * 7 = 14, 1 * 4=4

persistence(999) // returns 4
// Because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126,
// 1 * 2 * 6 = 12, and finally 1 * 2 = 2.
```
## Seeds

### Go
```go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
    "os"
    "time"
)

func main() {
	data := getAnswerJSON()
    start := time.Now()
	for _, item := range data {
		attempt := persistence(item[0], 0)
		if attempt != item[1] {
			panic(fmt.Errorf("wrong answer for %d. %d != %d", item[0], attempt, item[1]))
		}
	}
	fmt.Printf("Correctly answered all items in %v seconds\n", time.Since(start))
}

func persistence(number int, tries int) int {
  return 0
}

func openFile() *os.File {
	jsonFile, err := os.Open("01_persistence/submissions/answers.json")
	if err != nil {
		panic(err)
	}
	return jsonFile
}

func closeFile(file *os.File) {
	if err := file.Close(); err != nil {
		panic(err)
	}
}

func getAnswerJSON() [][]int {
	jsonFile := openFile()
	defer closeFile(jsonFile)
	byteValue, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		panic(err)
	}
	var data [][]int
	if err = json.Unmarshal(byteValue, &data); err != nil {
		panic(err)
	}
	return data
}
```

### Python
```python
import json
import time


def persistence(number):
    # Your code here
    pass


# Tests
assert persistence(4) == 0
assert persistence(10) == 1
assert persistence(39) == 3
assert persistence(679) == 5
assert persistence(68889) == 7
assert persistence(26888999) == 9
assert persistence(3778888999) == 10
assert persistence(277777788888899) == 11


def full_test():
    with open('answers.json') as f:
        answers = json.loads(f.read())
    start = time.time()
    for x, y in answers:
        assert persistence(x) == y
    print(f'All tests passed in {time.time() - start:.4f} seconds')


# Uncomment to test
# full_test()

```

### Javascript
```javascript
let persistence = number => {
    // Your code here
}

let assert = require('assert')
assert.strictEqual(persistence(4), 0)
assert.strictEqual(persistence(10), 1)
assert.strictEqual(persistence(39), 3)
assert.strictEqual(persistence(679), 5)
assert.strictEqual(persistence(68889), 7)
assert.strictEqual(persistence(26888999), 9)
assert.strictEqual(persistence(3778888999), 10)
assert.strictEqual(persistence(277777788888899), 11)
console.log('Initial Tests Passed')

let answers = require('./answers')
let full_test = () => {
    const start = new Date().getTime()
    answers.forEach(item => {
        let [x, y] = item
        assert.strictEqual(persistence(x), y)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()

```

### Answers.json
The structure for `answers.json` is:
```
[
  [number:int, answer:int],
  ...
]

```

