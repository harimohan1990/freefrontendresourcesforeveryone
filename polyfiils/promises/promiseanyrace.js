


if (typeof Promise.race !== 'function') {
    Promise.race = function(promises) {
        return new Promise((resolve, reject) => {
            if (!Array.isArray(promises)) {
                return reject(new TypeError('Argument must be an array'));
            }

            promises.forEach(promise => {
                Promise.resolve(promise)
                    .then(resolve)
                    .catch(reject);
            });
        });
    };
}





//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race