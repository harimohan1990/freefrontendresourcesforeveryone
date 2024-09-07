Array.prototype.filter = function (callback) {
    let result = [];
 
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
 
    return result;
  };


  //https://karandesai.hashnode.dev/polyfills-of-array-methods-in-javascript