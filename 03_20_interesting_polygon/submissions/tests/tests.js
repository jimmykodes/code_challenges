const _ = require('lodash')
const assert = require('assert')
const answers = require('./answers')

const full_test = (func) => {
    const start = new Date().getTime()

    /*****************************************************************/

    _.forEach(answers, (item) => {
        [x, y] = item
        assert.strictEqual(func(x), y)
    })
    console.log('All tests passed')
    console.log(`Total elapsed time: ${new Date().getTime() - start}ms`)

    /*****************************************************************/
}

module.exports = full_test