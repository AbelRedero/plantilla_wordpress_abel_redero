/*
 * Tema 3 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4
 */


const products = [
    {id:67 , name:"catode catodico" , price: 400 },
    {id:61 , name:"malusa males" , price: 300 },
    {id:420 , name:"pinco panco" , price: 222 },
    {id:37 , name:"triquitri track" , price: 111 },
    {id:777 , name:"bombollos bombolleantes" , price: 880 },
    {id:69 , name:"lerel lerelero" , price: 55 },
    {id:13 , name:"uno unez de unamuno" , price: 11111111111111 },
    {id:14, name:"reglas restrictivas" , price: 34 },
    {id:411 , name:"1g de aire 100% bio natural km 0" , price: 0.000000001 },
    {id:459 , name:"casi costoso" , price: 98 },
];


const product_prices = products.map(product => product.price);
console.log("Precios:", product_prices);


const cheap_products = products.filter(product => product.price < 40);
console.log("Baratos:", cheap_products);


const product_with_id_2 = products.find(product => product.id === 2);
console.log("Producto id 2:", product_with_id_2);