// In JavaScript, an iterator function is a unique function that returns an iterator object. An iterator object is an object that has a next() method, which returns an object with two properties: value and done. The value property represents the next value in the sequence, and the done property indicates whether the iterator has reached the end of the sequence.

// Iterator functions can be used to iterate over collections of data, such as arrays or objects.


function Iterator(array) {
    let nextIndex = 0;
    return {
      next: function () {
        if (nextIndex < array.length) {
          return {
            value: array[nextIndex++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  }
  
  const array = [1, 2, 3, 4, 5];
  const arrayValue = Iterator(array);
  
  console.log(arrayValue.next()); // { value: 1, done: false }
  console.log(arrayValue.next()); // { value: 2, done: false }
  console.log(arrayValue.next()); // { value: 3, done: false }
  console.log(arrayValue.next()); // { value: 4, done: false }
  console.log(arrayValue.next()); // { value: 5, done: false }
  console.log(arrayValue.next()); // { value: undefined, done: true }



  //https://medium.com/simform-engineering/iterators-and-generators-in-javascript-22da731b7fe3