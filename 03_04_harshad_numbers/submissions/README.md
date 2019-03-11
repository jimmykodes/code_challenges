# All Submissions
## Statistics
```
Speed
=============
Jimmy: 15ms
  Ted: 28ms

Character Count
================
Jimmy:  968 characters
  Ted: 1072 characters
```

## Submissions
### Ted
```javascript
let _ = require('lodash')

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
```

### Jimmy
```javascript
let _ = require('lodash')

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
```