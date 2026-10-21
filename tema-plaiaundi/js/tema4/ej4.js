class Book {
    constructor(title, price, units) {
        this.title = title;
        this.price = price;
        this.units = units;
    }

    calculate_amount() {
        return this.price * this.units;
    }

    is_available() {
        return this.units > 0;
    }
}

const first_book = new Book("The Little Prince", 12, 3);
const second_book = new Book("Don Quixote", 20, 0);

const books = [first_book, second_book];

const book_titles = books.map(book => book.title);
console.log("Titles:", book_titles);

const available_books = books.filter(
    book => book.is_available()
);
console.log("Available books:", available_books);

const total_amount = books.reduce(
    (total, book) => total + book.calculate_amount(),
    0
);

console.log("Total amount:", total_amount);