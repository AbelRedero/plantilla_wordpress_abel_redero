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

class ProductWithSurcharge extends Product {
    calculate_stock_value() {
        return super.calculate_stock_value() * 1.10;
    }
}

const keyboard = new Product(1, "Keyboard", 35, 4);
const cable = new ProductWithSurcharge(2, "Cable", 10, 2);

console.log("Cable value:", cable.calculate_stock_value());

const products = [keyboard, cable];

const total_stock_value = products.reduce(
    (total, product) => total + product.calculate_stock_value(),
    0
);

console.log("Total stock value:", total_stock_value);