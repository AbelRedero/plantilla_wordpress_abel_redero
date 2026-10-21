const book = {
    title: "Moby Dick",
    price: 12,
    amount: 3,

    get_total_price() {
    return String(this.amount * this.price) + " €"
    }
}