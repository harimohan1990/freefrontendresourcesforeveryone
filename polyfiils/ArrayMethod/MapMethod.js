

Array.prototype.Mymap = function(callback){


    result = []; 

    for(let i=0; i<this.length; i++){

        const callbackValue = callback(this[i],this,i)
        result.push(callbackValue)
    }
}

