/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
  if (a === undefined) {
    throw new Error('Функция "square" не может быть вызвана без аргумента');
  }
  console.log(a * a)
}

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
/**
 * чтобы проверить наличие аргумента в вызове функции и генерировать ошибку при его отсутствии, использовуем условное выражение внутри функции.
 * добавляем условное выражение if (a === undefined), которое проверяет, является ли a неопределенным (undefined). 
 * Если это условие выполняется, генерируем новую ошибку с помощью throw new Error().
 * В случае вызова функции без аргумента, условие выполняется, и генерируется ошибка, прерывая выполнение функции.
 */