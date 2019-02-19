// Lodash inclusion. Uncomment to use
let _ = require('lodash')


let flip = function (text) {
    let alphabet = []

    for (let i = 97; i < 123; i++) {
        alphabet.push(String.fromCharCode(i))
    }

    const legend = _.zipObject(alphabet, alphabet.slice().reverse())

    // This would obviously be faster to use the legend below instead of creating it every time the function is called,
    // but it is less code golf-y to just hard code it, so I'm creating it for kicks and giggles

    // const legend = {"a": "z", "b": "y", "c": "x", "d": "w", "e": "v", "f": "u", "g": "t", "h": "s", "i": "r", "j": "q", "k": "p", "l": "o",
    //    "m": "n", "n": "m", "o": "l", "p": "k", "q": "j", "r": "i", "s": "h", "t": "g", "u": "f", "v": "e", "w": "d", "x": "c", "y": "b", "z": "a"}

    text = _.toLower(text)
    let new_text = []
    _.forEach(text, (letter) => {
        if (_.indexOf(_.keys(legend), letter) >= 0) {
            new_text.push(legend[letter])
        } else {
            new_text.push(letter)
        }
    })
    return _.join(new_text, '')
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
console.log('All Tests Passed')