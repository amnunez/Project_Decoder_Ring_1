# Decoder Ring

Decoder ring is a cipher project that allows for encoding and decoding of input messages.

## Project setup

Follow the instructions below to get this project up and running on your own machine:

Run `npm i`

To run the tests, you can run the following command: 

`npm test`

You can run the application using the following command:

`npm start`

To stop the servers from running, you can press `Ctrl + C`

## Project Description & usage

The 3 ciphers available within the project are:

### Caesar Shift

<img>

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

"thinkful" -> "wklqnixo"

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite

### Polybius Square Cipher

<img>

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

"thinkful" -> "4432423352125413"

When decoding the message, each pair of numbers is translated using the coordinates.

### Substitution Cipher

<img>

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".
This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

