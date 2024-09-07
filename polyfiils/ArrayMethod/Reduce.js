
Array.prototype.reduce = function(callback, initialValue) {
    if (!callback) {
      throw new TypeError('callback must be a function');
    }

    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback.call(this, accumulator, this[i]);
    }

    return accumulator;
  };
