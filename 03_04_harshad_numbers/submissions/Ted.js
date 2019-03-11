let _ = require('lodash') // Assumes you will use lodash. Remove if you aren't

let Harshad = {
    is_valid: (number) => {
        // Convert number to str
        number.toString()

        // Put the strings into an array
        let num_array = _.split(number, '')

        // Change the strings to ints
        for (let i = 0; i < num_array.length; i++) {
            num_array[i] = parseInt(num_array[i]);
        }

        // Add all numbers in the array
        let array_sum = _.sum(num_array)

        // Return boolean for whether the number is valid or not.
        return (!!!((number / array_sum) % 1))
    },
    get_next: (number) => {
        // Add Check if the next value after number is a Harshad Number. If it is, return it.
        for (let i = number + 1; i < 1000; i++) {
            if (Harshad.is_valid(i)) {
                return (i)
            }
        }
    },
    get_series: (start, length) => {
        // Run loop to find length number of Harshad Number.
        return _.times(length, function () {
            start = Harshad.get_next(start)
            return start
        });
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
