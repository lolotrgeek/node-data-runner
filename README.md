# Node Data Runner
Calls a function for each value in an array and waits for a timeout between each call.

## Usage
Useful for rate limiting api calls.
```
const {run} = require('node-data-runner')

function increment(x) {
    return x + 1
}

// runs increment function on 1,2,3 array every 200ms
run([1, 2, 3], increment, 200).then(console.log)

// expects [2,3,4]

function flip (x,y) {
    return [y,x]
}

// can also pass multiple arguments to the function with an array
run([[1,2]], flip, 200).then(result => console.log(`Multi Pass? ${JSON.stringify(result) === '[[2,1]]'}`))

//expects [[2,1]]

```