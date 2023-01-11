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
