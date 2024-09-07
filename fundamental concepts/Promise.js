//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://dev.to/shameel/javascript-promise-all-vs-allsettled-and-race-vs-any-3foj#:~:text=race%3A%20Resolves%20as%20soon%20as,of%20the%20input%20promises%20resolves.

polyfills 

//https://siddhigate.hashnode.dev/exploring-promise-methods-and-their-polyfills-in-javascript-all-any-allsettled-and-race


// Promise.all()
// Promise.all method in JavaScript is used to handle multiple promises concurrently and wait for all of them to resolve.



// Promise.allSettled()
// The Promise.allSettled method is used to handle multiple promises concurrently, just like Promise.all, but it waits for all the promises to settle (either resolve or reject) before proceeding. It returns an array of objects representing the outcomes of the input promises, including their values or reasons for rejection.

// Promise.allSettled() always returns array of objects with status key which denotes fulfilled or rejected. If a promise is fulfilled then you can get response with value key and if the promise is rejected then you can find the reason in reason key.÷


//Promise.race: Resolves as soon as the first promise in the input array settles, whether it's resolved or rejected. The returned promise adopts the outcome (either resolve or reject) of the first settled promise.
//Promise.any: Resolves as soon as any one of the input promises resolves. It doesn't matter if the other promises reject. The returned promise adopts the resolved value of the first resolved promise.