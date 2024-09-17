function range(start, end, step=1) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (start < end) {
                start = start+step;
                return { value: start, done: false };
            }
            return { done: true, value: end };
        }
    }
} 

for(let n of range(0, 20, 5)){
    console.log('n:',n);
}