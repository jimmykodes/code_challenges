# All Submission

### Bailey
```javascript
let flip = function (text) {
    var a;
    var flipped = [];
    text = text.toLowerCase();
    for(var i = 0; i < text.length; i++) {
        a = text.charCodeAt(i);

        if(96 < a && a < 123) {
            a = 219 - a;
        }
        flipped.push(a);
    }
    return String.fromCharCode(...flipped);
}
```

### Chris
```javascript
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
```

### Eric
```javascript
let _ = require('lodash')


let preprocess = function(char) {
    return _.find([" ", "!", ",", "'"], c => c === char) ? char : String.fromCharCode(26 - (char.toLowerCase().charCodeAt(0) - 97) + 96)
}

let flip = function (text) {
    return _.map(text.split(''), t => preprocess(t)).join("")
}
```

### Jimmy
```javascript
let flip = function (text) {
    text = _.toLower(text)

    // See notes below
    let alphabet = _.times(26, (i) => {
        return String.fromCharCode(i + 97)
    })
    const legend = _.zipObject(alphabet, alphabet.slice().reverse())

    let new_text = []
    _.forEach(text, (char) => {
        if (char in legend) {
            new_text.push(legend[char])
        } else {
            new_text.push(char)
        }
    })
    return _.join(new_text, '')
}

// NOTES:
// Alphabet could also be created with:
// alphabet = []
// _.forEach(_.range(97, 123), (i) => {
//     alphabet.push(String.fromCharCode(i))
// })

// It would obviously be faster to use the legend below instead of creating it every time the function is called,
// but it is less code golf-y to just hard code it, so I'm creating it for kicks and giggles

// const legend = {"a": "z", "b": "y", "c": "x", "d": "w", "e": "v", "f": "u", "g": "t", "h": "s", "i": "r", "j": "q", "k": "p", "l": "o",
//    "m": "n", "n": "m", "o": "l", "p": "k", "q": "j", "r": "i", "s": "h", "t": "g", "u": "f", "v": "e", "w": "d", "x": "c", "y": "b", "z": "a"}
```

### Machine Learning
```javascript
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
```

### Ted
```javascript
let flip = function (text) {
    var lowerText = text.toLowerCase()
    var cyphercode = {
        'a': 'z',
        'b': 'y',
        'c': 'x',
        'd': 'w',
        'e': 'v',
        'f': 'u',
        'g': 't',
        'h': 's',
        'i': 'r',
        'j': 'q',
        'k': 'p',
        'l': 'o',
        'm': 'n',
        'n': 'm',
        'o': 'l',
        'p': 'k',
        'q': 'j',
        'r': 'i',
        's': 'h',
        't': 'g',
        'u': 'f',
        'v': 'e',
        'w': 'd',
        'x': 'c',
        'y': 'b',
        'z': 'a',
    }

    result = _.replace(lowerText, /[a-z]/gi, letter => cyphercode[letter])

    return(result)
}
```

### Tyler
```javascript
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
```
