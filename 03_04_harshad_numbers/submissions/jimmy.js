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

        // let sum = _.sum(_.map(number.toString(), (digit) => {
        //     return parseInt(digit)
        // }))
        // return number % sum === 0
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
// .is_equal tests
assert.equal(Harshad.is_valid(21), true)
assert.equal(Harshad.is_valid(73), false)
assert.equal(Harshad.is_valid(100), true)

// .get_next tests
// assert.equal(Harshad.get_next(13), 18)
// assert.equal(Harshad.get_next(28), 30)
// assert.equal(Harshad.get_next(46), 48)
//
// // .get_series tests
// assert.deepEqual(Harshad.get_series(65, 11), [70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111])
// assert.deepEqual(Harshad.get_series(143, 12), [144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198])
// assert.deepEqual(Harshad.get_series(110, 10), [111, 112, 114, 117, 120, 126, 132, 133, 135, 140])


// Uncomment for complete testing after passing initial tests
// let full_test = require('./submissions/tests/test')
// full_test(Harshad)
