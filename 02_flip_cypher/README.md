## Flip cypher

Last week we worked with numbers; this week we'll be working with strings! Cyphers were the first things I started programming
in python, and they helped me learn *many* useful tools. Hopefully that will hold true for Javascript as well.

This cypher is one of my favorites because the encoding and decoding processes are identical, so you don't have
to write 2 different functions to handle your plain text and cypher text differently. It's reversible!

The basic premise of the cypher is that each letter encodes as its opposite position: the second letter in the alphabet
encodes as the second to last letter in the alphabet.<br>
```
a = z
b = y
c = x
...
x = c
y = b
z = a
```

#### Example
```
flip('foo bar') => ull yzi
   and
flip('ull yzi') => foo bar
```

This cypher should handle punctuation like a champ:
```
flip('foo, bar!') => ull, yzi!
```
Capitalization, however, can be thrown out the window:
```
flip('FoO bAR') => ull yzi
```
## Bonus?

You can, of course, write this with just vanilla javascript. However, since learning new things is a large part of our
goal, I have also added an include statement for the Lodash library, use as desired. For more info on Lodash, look at 
their docs [here](https://lodash.com).

You'll need to install lodash first before using it:<br>
`npm install lodash`
___

##### PS

A quick note on running javascript not inside a browser:<br>
I'm assuming most of us know how to do this, but since I had no idea how before sitting down to write this week's
challenge, I'll give just a quick explanation. 

Basically, assuming you have node installed on your machine (`brew install node` to make sure) you can run js locally
just like you would run python locally. Navigate to the file's location in your terminal and run `node <your_filename_here.js>`

Testing in this challenge is done using node's `assert` capability, so if you are running this in something other
than node, I have no idea whether this base file will work correctly. My understanding of javascript is pretty limited, 
so if there are better ways to run javascript challenges, I'm all ears.

