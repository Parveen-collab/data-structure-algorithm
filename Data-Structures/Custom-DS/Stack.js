/*
# Stack

The stack data structure is a sequential collection of elements that follows the principle of **Last In First Out (LIFO)**.

The last element inserted into the stack is the first element to be removed.

A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.

Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.

The Stack data structure supports two main operations:

* **Push**, which adds an element to the collection.
* **Pop**, which removes the most recently added element from the collection.

# Stack Usage
* Browser history tracking
* Undo operation when typing
* Expression conversions
* Call stack in JavaScript runtime

*/

class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Print all elements
    print() {
        console.log(this.items.toString());
    }
}

const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // 3

stack.print(); // 10,20,30

console.log(stack.peek()); // 30

console.log(stack.pop()); // 30

stack.print(); // 10,20

console.log(stack.size()); // 2

console.log(stack.isEmpty()); // false