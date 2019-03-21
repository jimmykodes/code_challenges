def encode(plaintext, shift):
    b = bytearray(plaintext, 'utf-8')
    for i in range(len(plaintext)):
        c = b[i]
        if c > 64 and c < 91:
            b[i] = (c - 65 + shift) % 26 + 65
        elif c > 96 and c < 123:
            b[i] = (c - 97 + shift) % 26 + 97
    return b.decode()

def decode(cypher_text, shift):
    return encode(cypher_text, -shift)
