const { run } = require('./main')

function increment(x) {
    return x + 1
}

// runs increment function on 1,2,3 array every 200ms
run([1, 2, 3], increment, 200).then(result => console.log(`Single Pass? ${JSON.stringify(result) === '[2,3,4]'}`))

function flip (x,y) {
    return [y,x]
}

run([[1,2]], flip, 200).then(result => console.log(`Multi Pass? ${JSON.stringify(result) === '[[2,1]]'}`))

// runs increment function on 1,2,3 array every 200ms
let i = 1000
let count = 0
let t = 1000
let call = 0

const timeout = 210
let current_timeout = 0
setTimeout(() => console.log(`Done! ${call}`), 60000)
while (count < i) {
    count++
    let new_timeout = current_timeout + timeout
    setTimeout(() => {call++; console.log(`hi ${new_timeout}: call ${call}`)}, new_timeout)
    current_timeout = new_timeout
}



// Calls Test

const max_calls = 300
const call_timeout = 10000
let calls = 0

setTimeout(() => {
    calls = 0
    console.log("Reset!")
}, call_timeout)

function test_calls() {
    if (calls < max_calls) {
        calls++
        test_calls()
    }
    if (calls >= max_calls) {
        console.log(calls)
        console.log("Maxed Calls, waiting...")
        setTimeout(() => {
            calls = 0
            console.log("Reset!")
            test_calls() 
        }, call_timeout)
    }
}

// test_calls()