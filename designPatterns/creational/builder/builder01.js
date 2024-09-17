class HotDog {
    constructor() {
        this.bun = false;
        this.ketchup = false;
        this.musturd = false;
        this.cheese = false;
    }

    addBun() {
        this.bun = true;
        return this
    }

    addKetchup() {
        this.ketchup = true;
        return this
    }

    addMusturd() {
        this.musturd = true;
        return this
    }

    addCheese() {
        this.cheese = true;
        return this
    }
}


const order1 = new HotDog()
order1
    .addBun()
    .addCheese()
    .addKetchup()
    .addMusturd()

console.log(order1)