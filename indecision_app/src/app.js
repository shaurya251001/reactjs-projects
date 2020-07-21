import subtract, { square, add } from "./utils"; //with default exports you can ref it with any name you want
import isSenior, { isAdult, canDrink } from "./person";
console.log(square(2));
console.log(add(2, 564));

console.log(isAdult(12));
console.log(canDrink(71));
console.log(subtract(3252, 9238));
console.log(isSenior(66));
