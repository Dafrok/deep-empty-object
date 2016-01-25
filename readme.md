# deep-empty-object.js
## Intro
Check an object, if all or some of its leaf nodes are empty. It detects empty string, empty array, empty object, null, undefined in the target object.

## Install
```
$ npm install deep-empty-object
```

## Usage
```javascript
import empty from 'deep-empty-object'
empty.all({
    foo: '',
    bar: []
}) // => true

empty.some({
    foo: {},
    bar: []
}) // => true

empty.all({
    foo: {
        baz:[]
    },
    bar: [false]
}) // => false

empty.some({
    foo: {
        baz: ''
    },
    bar: [true]
}) // => true
```

## API
### empty.all
- param {object} obj
- return {boolean} If all of the leaf nodes of the target object, include array, object, string, null, undefined are empty, it will be true, else, false.

### empty.some
- param {object} obj
- return {boolean} If some of the leaf nodes of the target object, include array, object, string, null, undefined are empty, it will be true, else, false.

## Develop

```js
// Installation depends
npm run install

// Use fecs run Style Checker
npm run fecs

// Use jasmine run the test case
npm run test
```
