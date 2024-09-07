function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);  // Convert arguments to a string key
      if (cache[key]) {
        return cache[key];  // Return cached result if it exists
      }
  
      const result = fn.apply(this, args);  // Call the original function
      cache[key] = result;  // Cache the result
      return result;
    };
  }
  
  // Example Usage: Memoized add function
  const add = (a, b) => a + b;
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3));  // Output: 5 (calculated)
  console.log(memoizedAdd(2, 3));  // Output: 5 (cached)
  