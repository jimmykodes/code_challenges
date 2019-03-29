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

As with the last JS challenge, using lodash is highly encouraged, **_especially_**
if you didn't use it in the last challenge.

A new addition to this week's challenge is the abstraction of tests. Commented
out at the bottom of the `base.js` file is the code to run a complete battery
of tests against a _much_ larger data set<sup>[1]</sup>. The idea is that once you have passed
the basic assert statements shown in the `base.js` file, you will then uncomment
the `full_test` code and run your solution against the bigger test set. 
(It will even give you some time readouts<sup>[2]</sup> to help hone in your efficiency.)
<br>NOTE: In order to run the full tests, you will _have_ to have lodash installed on your machine.
So even if you don't use it in your submission, you'll need to make sure you install it before
trying to run the full tests.


___
<sub><sup>[1]</sup> The `require` statement for the `test.js` file _can_ go a little wonky
if you move the files around. The `require` statement should contain the relative
file path to the `test.js` file. So if you are running this from outside the submissions
folder, make sure the filepath is `./submissions/tests/test` and if you are inside the submissions
folder, the path should be `./tests/test`.</sub>

<sub><sup>[2]</sup> The times that will be posted in the statistics of the README will
likely be different from your local times as they will be dependant on my machine 
(and I might even run your submission against an even _bigger_ data set if the mood
strikes me).</sub>
