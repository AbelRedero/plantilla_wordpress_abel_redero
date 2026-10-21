const book = {
    title: "Moby Dick",
    price: 12,
    units: 3,

    calculate_amount() {
        return this.price * this.units;
    }
};

console.log("Initial amount:", book.calculate_amount());

book.units = 5;

console.log("Updated amount:", book.calculate_amount());

book.publisher = "Salamandra";

const field = "publisher";

console.log("Publisher:", book[field]);

delete book.publisher;

console.log("Publisher after deletion:", book.publisher);