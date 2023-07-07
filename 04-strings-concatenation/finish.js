/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
let names = 'Vasilii';
let surname = 'Panciuc';
let profil = 'Front End Developer';
let namesSurnameProfil = "меня зовут " + names + " " + surname + " и я " + profil;
console.log(namesSurnameProfil);

/Варинт 2 /

let names = 'Vasilii';
let surname = 'Panciuc';
let profil = 'Front End Developer';
let namesSurnameProfil = `меня зовут ${names} ${surname} и я ${profil}`;
console.log(namesSurnameProfil);