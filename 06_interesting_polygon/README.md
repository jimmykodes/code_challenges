# Interesting Polygons

Write a function `polygon_area` that takes in a positive integer `n`
and returns the number of 'pixels' the polygon will occupy given a side of length
`n`.

The polygons are shaped as follows:
```

| Length 1 | Length 2  |  Length 3 |
|----------|-----------|-----------|
|          |           |     x     |
|          |     x     |   x x x   |
|    x     |   x x x   | x x x x x |
|          |     x     |   x x x   |
|          |           |     x     |
|----------|-----------|-----------|
|  Area 1  |  Area 5   |  Area 13  |

```
and so on...
