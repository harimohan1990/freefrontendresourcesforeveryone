

Array.prototype.myForEach = function(callback){


    for(let i=0; i<this.length;i++){
       
        if (typeof this[i] !== "undefined") {

            callback(this[i],this,i)
        }
       
    }
}



// resource   
//https://karandesai.hashnode.dev/polyfills-of-array-methods-in-javascript