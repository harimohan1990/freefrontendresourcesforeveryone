function CarFactory() {}

CarFactory.prototype.createCar = function(type) {
    let car;

    if (type === 'sedan') {
        car = new Sedan();
    } else if (type === 'suv') {
        car = new SUV();
    }

    return car;
};

function Sedan() {
    this.type = 'sedan';
    this.doors = 4;
}

function SUV() {
    this.type = 'suv';
    this.doors = 4;
}

const factory = new CarFactory();

const mySedan = factory.createCar('sedan');
const mySUV = factory.createCar('suv');

console.log(mySedan.type);  // Outputs: sedan
console.log(mySUV.type);    // Outputs: suv

