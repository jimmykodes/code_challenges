# Square cypher

A square cypher is a really simple transposition cipher. It takes all the letters of a message, replaces ' 's with 'X's
and arranges the message into a perfect square. 'X's are used as padding on the end to create a perfect square. Once a
square is formed, written out in rows, it is then read in columns and sent as a message. The exact same process is used
to decode the message.

Example:

Original: we are discovered
```
W E X A R
E X D I S
C O V E R
E D X X X
X X X X X
```
Now that we have 'squared' it, we read down the columns from left to right to get our new message: `WECEXEXODXXDVXXAIEXXRSRXX`.

To decode, we follow exactly the same process:

```
W E C E X
E X O D X
X D V X X
A I E X X
R S R X X
```
And now the decoded message is `WEXAREXDISCOVEREDXXXXXXXX`

Write a function `transposed` that takes in a string and returns the uppercase transposed message. The incoming message could be
either plaintext or cypher text. Spaces should be returned as 'X's and all punctuation should be removed.

## Seeds
### Python
```python
import json
import time


def transposed(n):
    # Your code here
    pass


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
# full_test()

```

### Javascript
```javascript
let transposed = n => {
    // Your code here
}

let assert = require('assert')
assert.strictEqual(transposed("The eagle flies at midnight!"), "TGIXGXHLEMHXEESITXXXXDXXEFANXXALTIXX")
assert.strictEqual(transposed("The horse is in the barn, and it's a very big barn"), "TSNAXVGHEXRIEXEXTNTRBXIHXSYAHSEAXXROXXNABNRIBDXIX")
assert.strictEqual(transposed("WECEXEXODXXDVXXAIEXXRSRXX"), "WEXAREXDISCOVEREDXXXXXXXX")
assert.strictEqual(transposed("CROEMHOEXFITDETCDXENOONXXXXNIXGGDXGX"), "CODEXGREENXGOXTOXDEFCONXMIDNIGHTXXXX")
console.log('Initial Tests Passed')

let answers = require('./answers')
let full_test = () => {
    const start = new Date().getTime()
    answers.forEach(item => {
        let [x, y] = item
        assert.strictEqual(transposed(x), y)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()
```


## Answers.json
```
[
  [message:string, transposed message:string]
]
```
