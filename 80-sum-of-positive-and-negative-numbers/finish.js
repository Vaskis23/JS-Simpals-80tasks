/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */




const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

function sumPositiveNegative(arr) {
  let positiveSum = 0;
  let negativeSum = 0;

  for (let num of arr) {
    if (num > 0) {
      positiveSum += num;
    } else if (num < 0) {
      negativeSum += num;
    }
  }

  return {
    positive: positiveSum,
    negative: negativeSum,
  };
}

const result = sumPositiveNegative(nums);
console.log(result);
// { positive: 74, negative: -54 }

/**
 * создаем функцию sumPositiveNegative, которая будет принимать массив чисел в качестве параметра. 
 * Внутри функции создадим две переменные: positiveSum и negativeSum, для хранения сумм положительных и отрицательных чисел
 * перебираем каждый элемент массива с помощью цикла for...of. 
 * Внутри цикла будем проверять каждое число на положительность или отрицательность. 
 * Если число положительное, добавим его к переменной positiveSum, а если число отрицательное, добавим переменной negativeSum.
 * в завершении цикла, вернем объект, содержащий два свойства: positive и negative, со значениями сумм положительных и отрицательных чисел 
 */

//Вопрос
//можно ли сделать такую же манипуляцию со строками например по алфовиту или по определенной длине строки? как? методом перебора ?