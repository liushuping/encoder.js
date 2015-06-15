encoder.js
=======

An encoding library in JavaScript

[![build status](https://travis-ci.org/liushuping/encoder.js.svg)](https://travis-ci.org/liushuping/encoder.js.svg)

## HTML encode and decode
HTML encode an input string
```
var encoder = require('encoder.js');
var input = '100 > 200 is incorrect';
var encoded = encoder.encodeHTML(input); //100&nbsp;&gt;&nbsp;200&nbsp;is&nbsp;incorrect
```

HTML decode an input string
```
var encoder = require('encoder.js');
var intput = '100 &gt; 200 is incorrect';
var decoded = encoder.decodeHTML(input); //100 > 200 is incorrect
```

## HTML attribute encode and decode

## JavaScript encode and decode

## XML encode and decode

## URI encode and decode
URI encode an input string
```
var encoder = require('./encoder.js');
var input = 'http://www.example.com/abc 123';
var encoded = encoder.encodeURI(input); //http://www.example.com/abc%20123
```

URI decode an input string
```
var encoder = require('./encoder.js');
var input = 'http://www.example.com/abc%20123';
var decoded = encoder.decodeURI(input); //http://www.example.com/abc 123
```

## Test
Make sure `mocha` is installed globally
```
npm install mocha -g
```
Run `npm test` to run unit test

## Dependencies

## License
MIT
