## Pisano Period

A Pisano period is the length at which a sequence of the remainders of a given number divided by each number in
the fibonacci sequence repeats.<sup>[1]</sup>

```
| Fibonacci          | 0 | 1 | 1 | 2 | 3 | 5 | | 8 | 13 | 21 | 34 | 55 | 89 |
|--------------------|---|---|---|---|---|---| |---|----|----|----|----|----|
| Pisano period of 4 | 0 | 1 | 1 | 2 | 3 | 1 | | 0 | 1  | 1  | 2  | 3  | 1  |
```
This table shows the Fibonacci sequence and the Pisano period of the number 4. You can see
by the break in the table where the pattern of the remainders repeats. For the entirety of the 
Fibonacci sequence (i.e. infinity) this pattern will _always_ remain the same for the given divisor.
The length of this pattern is that number's Pisano period, so the Pisano period of `4` would be `6`.

Write a function `pisano_period` that takes in a positive integer and returns the length
of its Pisano period. 

___
<sub>[1] The fibonacci sequence starts with `0, 1` and is calculated by adding the last 2 numbers of the sequence
to get the next number. `0, 1, 1, 2, 3, 5, 8, 13, etc.` since `1 + 1 = 2, 1 + 2 = 3, 3 + 2 = 5, and so on` </sub>