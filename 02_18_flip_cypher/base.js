// Lodash inclusion. Uncomment to use
// let _ = require('lodash')

/* Un-minified */

// let flip = function (text) {
//     var result = "";
//     return text.split("").forEach(function (char) {
//         var n = char.toLowerCase().charCodeAt(0);
//         if (n >= 97 && n <= 122) {
//             var diff = 122 - (n - 97);
//             result += String.fromCharCode(diff)
//         } else result += char
//     }), result
// };

let flip=function(r){var o="";return r.split("").forEach(function(r){var a=r.toLowerCase().charCodeAt(0);if(a>=97&&a<=122){var e=122-(a-97);o+=String.fromCharCode(e)}else o+=r}),o};

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
