const _ = require('lodash')
const assert = require('assert')
const answers = require('./answers')

const full_test = (obj) => {
    const start = new Date().getTime()

    /*****************************************************************/

    _.forEach(answers.is_valid, (item) => {
        [x, y] = item
        assert.equal(obj.is_valid(x), y)
    })
    console.log('All .is_valid tests passed')
    console.log(`Elapsed time: ${new Date().getTime() - start}ms`)

    /*****************************************************************/

    _.forEach(answers.get_next, (item) => {
        [x, y] = item
        assert.equal(obj.get_next(x), y)
    })
    console.log('All .get_next tests passed')
    console.log(`Elapsed time: ${new Date().getTime() - start}ms`)

    /*****************************************************************/

    _.forEach(answers.get_series, (item) => {
        [x, y, z] = item
        assert.deepEqual(obj.get_series(x, y), z)
    })
    console.log('All tests passed')
    console.log(`Total elapsed time: ${new Date().getTime() - start}ms`)

    /*****************************************************************/
}

module.exports = full_test
