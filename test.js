const { run } = require('./main')

function increment(x) {
    return x + 1
}

// runs increment function on 1,2,3 array every 200ms
run([1, 2, 3], increment, 200).then(result => console.log(`Pass? ${JSON.stringify(result) === '[2,3,4]'}`))
