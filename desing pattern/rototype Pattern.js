const carPrototype = {
    init: function(model) {
        this.model = model;
    },
    getModel: function() {
        return this.model;
    }
};

function Car(model) {
    function F() {}
    F.prototype = carPrototype;

    const f = new F();
    f.init(model);
    return f;
}

const car = Car('Tesla Model 3');
console.log(car.getModel());  // Outputs: Tesla Model 3
