/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

function templateLiteral(num) {
    return `Число ${num}.
Это число меньше ${num < 10 ? 'меньше' : 'больше или равно'} 10.  
Квадратный корень этого числа - ${Math.sqrt(num)}. `
}

// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/

/**
 * создаем функцию templateLiteral с одним параметром num, которая принимает число.
 * Внутри функции мы используем шаблонные строки для создания многострочной строки.
 * возвращаем строку, в которую вставляем значение num с помощью ${num}.
 * добавляем условное выражение с использованием тернарного оператора (num < 10 ? 'меньше' : 'больше или равно'). 
 * Если число num меньше 10, вставляем строку 'меньше', иначе вставляем строку 'больше или равно'.
 * Это позволяет нам генерировать правильную строку, в зависимости от значения числа.
 * добавляем строку для вывода квадратного корня числа num, используя Math.sqrt(num). 
 * Вставляем значение квадратного корня с помощью ${Math.sqrt(num)}.
 * В конце функции мы возвращаем сформированную строку.
 * тестируем функцию templateLiteral, вызывая ее с разными значениями чисел (myNumber и myAnotherNumber) и выводим результаты в консоль.
 */