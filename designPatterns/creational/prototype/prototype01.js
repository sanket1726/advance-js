const user = {
    getDetails() {
        return `hello`;
    }
}

const dev = Object.create(user, {name: {value: 'dev'}})
console.log('Dev:', dev.__proto__)
console.log('Dev:', Object.getPrototypeOf(dev))