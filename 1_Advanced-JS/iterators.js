/* Objects that allow sequential access to their elements using .next().
Implements the Iterator Protocol (next() method returning { value, done }). */

function createIterator(arr) {
    let index = 0;
    return {
        next: function () {
            if (index < arr.length) {
                return { value: arr[index++], done: false };
            }
            return { value: undefined, done: true };
        }
    };
}

const iterator = createIterator([10, 20, 30]);

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
