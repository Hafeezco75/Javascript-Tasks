class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(numbers) {
        this.queue.addElements(numbers);
    }

    addElements(numbers) {
        for (let count = 0; count < numbers; count++) {;
        }

    }

    dequeue(numbers) {
        this.queue.removeElements(numbers);
    }

    removeElements(numbers) {
        for (let count = 0; count < this.queue.length; count++) {
            this.queue.shift(count);
        }
        return this.queue;
    }


}