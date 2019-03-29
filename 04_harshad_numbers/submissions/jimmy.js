let _ = require('lodash') // Assumes you will use lodash. Remove if you aren't

let Harshad = {
    get_sum: (number, sum) => {
        sum = sum || 0
        sum += number % 10
        number = Math.floor(number / 10)
        return number ? Harshad.get_sum(number, sum) : sum
    },
    is_valid: (number) => {
        let sum = Harshad.get_sum(number)
        return number % sum === 0

        // Lodash Solution - local tests, lodash solution takes 2 - 3 times as long
        // let sum = _.sum(_.map(number.toString(), (digit) => {
        //     return parseInt(digit)
        // }))
        // return number % sum === 0
    },
    get_next: (number) => {
        number += 1
        return Harshad.is_valid(number) ? number : Harshad.get_next(number)
    },
    get_series: (start, length) => {
        let sequence = []
        let number = start
        while (sequence.length < length) {
            number = Harshad.get_next(number)
            sequence.push(number)
        }
        return sequence
    }
}

// Tests
/*************************************************************************************/

let assert = require('assert')
// .is_valid tests
assert.equal(Harshad.is_valid(21), true)
assert.equal(Harshad.is_valid(73), false)
assert.equal(Harshad.is_valid(100), true)
console.log('.is_valid tests passed')

// .get_next tests
assert.equal(Harshad.get_next(13), 18)
assert.equal(Harshad.get_next(28), 30)
assert.equal(Harshad.get_next(46), 48)
console.log('.get_next tests passed')

// .get_series tests
assert.deepEqual(Harshad.get_series(65, 11), [70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111])
assert.deepEqual(Harshad.get_series(143, 12), [144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198])
assert.deepEqual(Harshad.get_series(110, 10), [111, 112, 114, 117, 120, 126, 132, 133, 135, 140])
console.log('.get_series tests passed')


// Uncomment for complete testing after passing initial tests
let full_test = require('./tests/test')
full_test(Harshad)
