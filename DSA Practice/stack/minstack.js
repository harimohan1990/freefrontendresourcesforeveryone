class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    
    push(x) {
        this.stack.push(x);
        // Push the minimum value to minStack
        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x);
        }
    }
    
    pop() {
        const poppedValue = this.stack.pop();
        // If the popped value is the minimum, pop it from minStack as well
        if (poppedValue === this.getMin()) {
            this.minStack.pop();
        }
    }
    
    top() {
        return this.stack[this.stack.length - 1];
    }
    
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
