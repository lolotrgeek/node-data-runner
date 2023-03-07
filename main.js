
/**
 * Calls a function for each value in an array and waits for a timeout between each call
 * 
 * @param {array} values an array of values to pass to the function `func`
 * @param {function} func 
 * @param {number} timeout (ms) defaults to  5 calls per second, or 300 calls/minute, 1 call every 200ms
 * @returns waits for all runners to settle then returns an `array` of results 
 * @todo could make it faster by removing allSettled and return results as promises are resolved
 */
function run(values, func, timeout = 210) {
    let current_timeout = 0
    let settled = Promise.allSettled(values.map(value => {
        let new_timeout = current_timeout + timeout
        let runner = new Promise(resolve => setTimeout(async () => {
            try {
                resolve(Array.isArray(value) ? await func(...value): await func(value))
            } catch (error) {
                resolve(error)                
            }

        }, new_timeout))
        current_timeout = new_timeout
        return runner
    }))
    return settled.then(dones => dones.map(done => done.value))
}


module.exports = { run }