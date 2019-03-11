# Shift Cypher

A shift cypher is a simple encoding technique that shifts letters down the alphabet a given distance.<br>
`'a' -5-> 'f'`<br>

Write 2 functions `encode` and `decode`.

`encode` takes in a string: `plaintext` and an integer: `shift` and shifts all the letters of the plain text
the given shift distance down the alphabet to return an encoded message.

`decode` takes in a string: `cypher_text` and an integer: `shift` and shifts all the letters of the cypher text
the given shift distance back up the alphabet to return a decoded message.

Both functions should preserve capitalization and punctuation. And in both cases `shift` can be a positive or
negative number, and can have an absolute value > 26. If shifting further than 26, the shift distance should
'wrap' the alphabet, i.e. `'z' -27-> 'a'`
