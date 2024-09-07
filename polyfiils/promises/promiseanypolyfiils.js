
if (typeof Promise.all !== 'function') {
    Promise.all = function(promises) {
        return new Promise(function(resolve, reject) {
            // Check if the input is an array
            if (!Array.isArray(promises)) {
                return reject(new TypeError('Argument must be an array'));
            }

            let resolvedValues = [];
            let resolvedCount = 0;

            // Handle cases with an empty array
            if (promises.length === 0) {
                return resolve([]);
            }

            promises.forEach(function(promise, index) {
                // Convert non-promise values into resolved promises
                Promise.resolve(promise).then(function(value) {
                    resolvedValues[index] = value;
                    resolvedCount++;

                    // If all promises have been resolved
                    if (resolvedCount === promises.length) {
                        resolve(resolvedValues);
                    }
                }).catch(function(error) {
                    reject(error); // Reject as soon as one promise fails
                });
            });
        });
    };
}

let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));
let promise3 = 42;

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, "foo", 42]
}).catch((error) => {
    console.error(error);
});


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any