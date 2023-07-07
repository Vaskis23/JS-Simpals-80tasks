/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

const arraySortInfo = (inputArray) => {
    if (inputArray.find((element) => typeof element !== 'number')) {
        return "Некоторые элементы не являются числами"
    }

    if (inputArray.every((element, index) => index > 0 ? element >= inputArray[index - 1] : true)
    ) {
        return "Массив отсортирован по возрастанию"
    }

    if (inputArray.every((element, index) => index > 0 ? element <= inputArray[index - 1] : true)
    ) {
        return "Массив отсортирован по убыванию"
    }

        return "Массив не отсортирован"
}

console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
/**
 * создаем функцию arraySortInfo с одним параметром inputArray, которая принимает массив для проверки.
 * Сначала мы проверяем, содержит ли массив хотя бы один элемент, который не является числом, с помощью метода find и условия typeof element !== 'number'. 
 * Если такой элемент найден, то мы возвращаем строку "Некоторые элементы не являются числами".
 * Затем мы проверяем, отсортирован ли массив по возрастанию. Для этого мы используем метод every, который проверяет, выполняется ли условие для каждого элемента массива. 
 * Условие element >= inputArray[index - 1] сравнивает текущий элемент с предыдущим элементом. Если все элементы массива удовлетворяют этому условию, значит, массив отсортирован по возрастанию. 
 * Мы возвращаем строку "Массив отсортирован по возрастанию".
 * Затем мы проверяем, отсортирован ли массив по убыванию. Для этого мы снова используем метод every и условие element <= inputArray[index - 1], которое сравнивает текущий элемент с предыдущим элементом. 
 * Если все элементы массива удовлетворяют этому условию, значит, массив отсортирован по убыванию. 
 * Мы возвращаем строку "Массив







 */