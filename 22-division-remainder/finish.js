/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10 // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3
const myNumber3 = myNumber1 % myNumber2;
console.log(myNumber3);

//Оператор %(остаток от деления) имеет приоритет 13 и ассоциативность "слева направо"

//Проверка ассоциативности оператора остаток от деления
let a = 20;
let b = 4;
let c = 2;

let result1 = a % b % c;
console.log(result1);

let result2 = (a % b) % c;
console.log(result2);

let result3 = a % b;
console.log(result3);
