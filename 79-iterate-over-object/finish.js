/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */



const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// варинат 1
// function sumObjectValues(nums) {
//   let sum = 0;
//   Object.keys(nums).forEach((key) => { //возырашает только собственные свойства объекта 
//     if (typeof nums[key] === 'numbers') {
//       sum += nums[key]
//     }
//   })

//   return sum;
// }

function sumObjectValues(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }

  return sum;
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42

/**
 * 
 * создаем функцию sumObjectValues, которая принимает объект в качестве параметра.
 * внутри функции создаем переменную sum, устанавливаем ее начальное значение равным 0. 
 * используем цикл for...in, чтобы перебрать все свойства объекта.
 * внутри цикла проверяем, является ли значение текущего свойства числом, с помощью условия typeof obj[key] === 'number'. 
 * если значение является числом, мы добавляем его к переменной sum с помощью оператора +=.
 * возвращаем значение переменной sum из функции. 
 * objectWithNumbers и obj ссылаются на один и тот же объект в памяти.
 */

/**
 * вопрос 
 * А возможно сделать такие же манипуляции с строками или с другими типами даннымых?
 */





//переписан чеез метод reduce
// function sumObjectValues(obj) {
//   return Object.values(obj).reduce((sum, value) => {
//     if (typeof value === 'number') {
//       return sum + value;
//     }
//     return sum;
//   }, 0);
// }

// const result = sumObjectValues(objectWithNumbers);
// console.log(result);

/**
 * вызываем метод reduce на этом массиве, передавая функцию обратного вызова (sum, value) => {...}. 
 * Внутри этой функции мы проверяем тип значения (typeof value === 'number') и, если оно является числом, добавляем его к накопленной сумме sum. 
 * возвращаем обновленную сумму.
 */