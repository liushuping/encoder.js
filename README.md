encoder.js
=======

An encoding library in JavaScript

## HTML encode and decode
HTML encode an input string
```
var encoder = require('encoder.js');
var input = '100 > 200 is incorrect';
var encoded = encoder.encodeHTML(input); //100 &gt; 200 is incorrect
```

HTML decode an input string
```
var encoder = require('encoder.js');
var intput = '100 &gt; 200 is incorrect';
var decoded = encoder.decodeHTML(input); // 100 > 200 is incorrect
```

## HTML attribute encode and decode

## JavaScript encode and decode

## XML encode and decode

## URI endode and decode

## Test
Make sure `mocha` is installed globally
```
npm install mocha -g
```
Run `npm test` to run unit test

## Dependencies

## License
MIT
