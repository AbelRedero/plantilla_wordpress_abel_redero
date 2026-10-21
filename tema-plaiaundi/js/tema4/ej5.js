class Product {
    #stock;

    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.#stock = 0;
        this.stock = stock;
    }

    get stock() {
        return this.#stock;
    }

    set stock(value) {
        if (Number.isInteger(value) && value >= 0) {
            this.#stock = value;
        }
    }

    sell(units) {
        if (
            !Number.isInteger(units) ||
            units <= 0 ||
            units > this.#stock
        ) {
            return false;
        }

        this.#stock -= units;
        return true;
    }

    is_available() {
        return this.#stock > 0;
    }

    calculate_stock_value() {
        return this.price * this.#stock;
    }
}

const keyboard = new Product(1, "Keyboard", 35, 4);

keyboard.stock = 8;
console.log("Stock:", keyboard.stock);

keyboard.stock = -1;
console.log("Stock after assigning -1:", keyboard.stock);

keyboard.stock = 2.5;
console.log("Stock after assigning 2.5:", keyboard.stock);

keyboard.stock = "6";
console.log("Stock after assigning text:", keyboard.stock);

console.log("Sell 3:", keyboard.sell(3));
console.log("Stock after sale:", keyboard.stock);

console.log("Sell 10:", keyboard.sell(10));
console.log("Final stock:", keyboard.stock);

console.log("Available:", keyboard.is_available());
console.log("Stock value:", keyboard.calculate_stock_value());