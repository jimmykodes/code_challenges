let _ = require('lodash')
let persistence = (number, count) => {
    count = count || 0
    if (number < 10) {
        return count
    } else {
        let product = _.reduce(_.map(number.toString(), digit => parseInt(digit)), (x, y) => {
            return x * y
        })
        count += 1
        return persistence(product, count)
    }
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
        [x, y] = item
        assert.strictEqual(persistence(x), y)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

full_test()
