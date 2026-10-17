/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4
 */


const products = [
   { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
   { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
   { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
 ];


const product_prices = products.map(product => product.price);
console.log("Precios:", product_prices);


const cheap_products = products.filter(product => product.price < 40);
console.log("Baratos:", cheap_products);


const product_with_id_2 = products.find(product => product.id === 2);
console.log("Producto id 2:", product_with_id_2);