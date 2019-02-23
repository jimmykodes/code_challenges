// Finished by Jimmy. Inspired by Eric
const SimpleLinearRegression = require('ml-regression-simple-linear')
const _ = require('lodash')

let char_code = (l) => {
    let char = l.charCodeAt(0)
    if (char >= 97 && char <= 122) {
        return char
    } else {
        return false
    }
}

let train_data = (plaintext, cyphertext) => {
    let x = _.compact(_.map(plaintext.toLowerCase().split(""), char_code))
    let y = _.compact(_.map(cyphertext.toLowerCase().split(""), char_code))
    return [x, y]
}

let regression = new SimpleLinearRegression(...train_data('Good News, Everyone!', 'tllw mvdh, veviblmv!'))

const flip = (text) => {
    return _.join(_.map(text, (l) => {
        let char = _.toLower(l).charCodeAt(0)
        if (char >= 97 && char <= 122) {
            return String.fromCharCode(regression.predict(char))
        } else {
            return String.fromCharCode(char)
        }
    }), '')
}


// Tests
// Brought to you by Futurama
// Futurama is brought to you by... Arachno Spores! The fatal spore, with the funny name!

let assert = require('assert')
assert.equal(flip('foo bar'), 'ull yzi')
assert.equal(flip('Good News, Everyone!'), 'tllw mvdh, veviblmv!')
assert.equal(flip('Bite my shiny metal ass!'), 'yrgv nb hsrmb nvgzo zhh!')
assert.equal(flip("ru uli zmb ivzhlm blf zivm'g xlnkovgvob hzgrhurvw, r szgv blf"), "if for any reason you aren't completely satisfied, i hate you")
assert.equal(flip("r wlm'g dzmg gl orev lm gsrh kozmvg zmbnliv"), "i don't want to live on this planet anymore")
assert.equal(flip("SHUT UP AND TAKE MY MONEY!"), "hsfg fk zmw gzpv nb nlmvb!")
console.log('All tests passed')