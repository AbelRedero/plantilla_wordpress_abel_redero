const product = {
    name: "Keyboard",
    price: 35,
    supplier: {
        name: "Supplier A"
    }
};

const product_alias = product;

const product_copy = {
    ...product
};

product.price = 40;
product_copy.supplier.name = "Supplier B";

console.log("Original:", product);
console.log("Alias:", product_alias);
console.log("Copy:", product_copy);

const independent_copy = {
    ...product,
    supplier: {
        ...product.supplier
    }
};

independent_copy.supplier.name = "Supplier C";

console.log("Original after independent copy:", product);
console.log("Independent copy:", independent_copy);

const {
    name: product_name,
    price
} = product;

console.log("Product name:", product_name);
console.log("Price:", price);