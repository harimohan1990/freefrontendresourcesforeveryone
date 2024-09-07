let person = {
    firstname: "Kirtesh",
    lastname: "bansal"
  }
  
  let printName = function (country) {
    console.log(this.firstname + " " + this.lastname + " from " 
    + country);
  }

  Function.prototype.myBind = function(object, ...args){
           let func  =this; 

           return function (...args){
             return func.apply(object, [args1, args2])
           }
  }


  //https://dev.to/kirteshbansal/call-apply-and-bind-javascript-methods-their-polyfills-k4e