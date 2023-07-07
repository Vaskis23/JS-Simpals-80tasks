/** ЗАДАЧА 28 - Let
 *
 * Измените код так, чтобы ошибка исчезла
 */

//ошибка возникает из-за повторного объявления переменной с использованием ключевого слова const
// Что бы исправить ошибку достаточно заменить в первой строке на let и удалить const на 13 строке
let myFavoriteAnimal = 'Monkey'

console.log(myFavoriteAnimal)
// 'Monkey'

myFavoriteAnimal = 'Cat'

console.log(myFavoriteAnimal)
// 'Cat'
