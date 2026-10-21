import { Product } from "./modelos/producto.js";
import { ProductWithSurcharge } from "./modelos/producto_con_recargo.js";

const keyboard = new Product(1, "Keyboard", 35, 4);
const cable = new ProductWithSurcharge(2, "Cable", 10, 2);

console.log("Keyboard:", keyboard.calculate_stock_value());
console.log("Cable:", cable.calculate_stock_value());

const products = [keyboard, cable];

const total_stock_value = products.reduce(
    (total, product) => total + product.calculate_stock_value(),
    0
);

console.log("Total:", total_stock_value);