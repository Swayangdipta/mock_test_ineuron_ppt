//1.Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
        return null;
        }
        return this.items.pop();
    }


    isEmpty() {
        return this.items.length === 0;
    }
}
  
let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(20)

console.log(stack);

// 2.Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
        return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
  
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);