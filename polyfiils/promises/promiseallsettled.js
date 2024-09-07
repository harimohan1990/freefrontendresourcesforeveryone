

if (typeof Promise.allSettled !== 'function') {
    Promise.allSettled = function (promises) {
      return Promise.all(promises.map(promise =>
        Promise.resolve(promise).then(
          value => ({ status: 'fulfilled', value }),
          reason => ({ status: 'rejected', reason })
        )
      ));
    };
  }
  


const promise1 = Promise.resolve(42);
const promise2 = Promise.reject('Error');
const promise3 = new Promise(resolve => setTimeout(resolve, 1000, 'Success'));

Promise.allSettled([promise1, promise2, promise3]).then(results => {
    console.log(results);
  });


//resource https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled