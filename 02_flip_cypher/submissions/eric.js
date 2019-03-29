// Lodash inclusion. Uncomment to use
let _ = require('lodash')


let preprocess = function(char) {
    return _.find([" ", "!", ",", "'"], c => c === char) ? char : String.fromCharCode(26 - (char.toLowerCase().charCodeAt(0) - 97) + 96)
}

let flip = function (text) {
    return _.map(text.split(''), t => preprocess(t)).join("")
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