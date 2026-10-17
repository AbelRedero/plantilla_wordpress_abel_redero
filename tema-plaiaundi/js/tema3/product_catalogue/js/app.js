const catalogue = [
    { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
    { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
    { id: 4, nombre: "Cable", precio: 8, stock: 10 }
];

function get_names(from_list) {
    return from_list.map(product => product.nombre);
}

function get_availables(from_list) {
    return from_list.filter(product => product.stock > 0);
}

function search_by_id(from_list, wanted_id) {
    return from_list.find(product => product.id === wanted_id);
}

function calculate_stock_total_value(from_list) {
    return from_list.reduce((total, product) => total + product.precio * product.stock, 0);
}

function get_availables_names(from_list) {
    return get_availables(from_list).map(product => product.nombre);
}

console.log("Catálogo completo");
console.log(get_names(catalogue));
console.log(get_availables(catalogue));
console.log(calculate_stock_total_value(catalogue));

console.log("Búsqueda id 2");
console.log(search_by_id(catalogue, 2));

console.log("Búsqueda id 99");
const missing_product = search_by_id(catalogue, 99);
if (missing_product === undefined) {
    console.log("Producto no encontrado");
} else {
    console.log(missing_product);
}

console.log("Array vacío");
console.log(get_names([]));
console.log(get_availables([]));
console.log(search_by_id([], undefined));
console.log(calculate_stock_total_value([]));

console.log("Catálogo conservado");
console.log(catalogue);