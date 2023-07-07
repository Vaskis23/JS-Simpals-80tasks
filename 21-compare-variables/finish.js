/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'
// Напишите код здесь
let num = Number(myVariable1) <= Number(myVariable2);
console.log(num)
//варинат 2
console.log(parseInt(myVariable1) <= parseInt(myVariable2));




myVariable1 = '20'
myVariable2 = 100
// Напишите код здесь
let num2 = Number(myVariable1) <= Number(myVariable2);
console.log(num2)
//варинат 2
console.log(parseInt(myVariable1) <= parseInt(myVariable2));

//преобразуем обе переменные в числа, используя функцию Number()
//через функцию parseInt() принимает строку в качестве аргумента и возвращает целое или NaN