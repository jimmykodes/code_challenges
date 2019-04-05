let polygon_area = (n) => {
    return n**2 + (n-1)**2
}


let assert = require('assert')
assert.strictEqual(polygon_area(1), 1)
assert.strictEqual(polygon_area(2), 5)
assert.strictEqual(polygon_area(3), 13)
assert.strictEqual(polygon_area(4), 25)
console.log('All Tests Passed')


let full_test = () => {
    const start = new Date().getTime()
    let answers = require('./answers')
    answers.forEach(item => {
        let [n, answer] = item
        assert.strictEqual(polygon_area(n), answer)
    })
    console.log(`Full tests passed in: ${new Date().getTime() - start}ms`)
}

// Uncomment for full tests
// full_test()
