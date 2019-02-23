
// Bailey Vanilla Submission

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
