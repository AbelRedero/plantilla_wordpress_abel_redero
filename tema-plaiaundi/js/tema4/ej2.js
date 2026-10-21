const first_account = {
    holder: "Ana",
    balance: 150,

    describe() {
        return `Holder: ${this.holder}, balance: ${this.balance} €`;
    }
};

const second_account = {
    holder: "Luis",
    balance: 300
};

second_account.describe = first_account.describe;

console.log(first_account.describe());
console.log(second_account.describe());

const describe_account = first_account.describe;

console.log(
    "Saved method:",
    describe_account.call(first_account)
);