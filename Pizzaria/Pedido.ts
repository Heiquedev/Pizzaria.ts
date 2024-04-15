import { Pizza } from "./Pizza";
import { Sabores } from "./Sabores";

let pizza1 : Pizza = new Pizza(`Pequena`,Sabores.sabor1, 49.99 )
let pizza2 : Pizza = new Pizza(`Média`,Sabores.sabor2, 59.99 )
let pizza3 : Pizza = new Pizza(`Família`,Sabores.sabor3, 79.99 )


console.log("");
console.log("");
console.log(pizza1.infoPizza());
console.log("");
console.log(pizza2.infoPizza());
console.log("");
console.log(pizza3.infoPizza());
console.log("");
console.log("");




