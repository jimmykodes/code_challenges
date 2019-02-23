    var dict = {
    'a' : 'z',
    'b' : 'y',
    'c' : 'x',
    'd' : 'w',
    'e' : 'v',
    'f' : 'u',
    'g' : 't',
    'h' : 's',
    'i' : 'r',
    'j' : 'q',
    'k' : 'p',
    'l' : 'o',
    'm' : 'n',
    'n' : 'm',
    'o' : 'l',
    'p' : 'k',
    'q' : 'j',
    'r' : 'i',
    's' : 'h',
    't' : 'g',
    'u' : 'f',
    'v' : 'e',
    'w' : 'd',
    'x' : 'c',
    'y' : 'b',
    'z' : 'a'
};

function flip(string) {
    var new_string = "";
    string = string.toLowerCase();
    while(string.length>0){
        letter = string.slice(0, 1);
        string = string.slice(1, string.length);
        var string_keys = Object.keys(dict);
        if(!string_keys.includes(letter)){
            new_string += letter;
        }
            for (keys in dict) {
                if(dict[keys].includes(letter)){
                    new_string += dict[letter];
                }
            }
        }
    return new_string
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