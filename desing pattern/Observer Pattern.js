


function Subject() {
    this.observers = []; // array of observer functions
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
    },
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(observer => observer !== fn);
    },
    notify: function(data) {
        this.observers.forEach(observer => observer(data));
    }
};

const subject = new Subject();

function observer1(data) {
    console.log('Observer 1:', data);
}

function observer2(data) {
    console.log('Observer 2:', data);
}

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello Observers!');  // Outputs: Observer 1: Hello Observers!, Observer 2: Hello Observers!


//Purpose: Defines a subscription mechanism to notify multiple objects about any changes in the state of the observed object.