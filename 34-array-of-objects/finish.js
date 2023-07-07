/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
//создали массив с тремя обеъктами в которых по 3 свойства и добавили новый объект при помощи сетода push
const cars = [
    {
        carBrand: 'Mercedes-Benz',
        price: 12000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Toyota',
        price: 10000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Honada',
        price: 7000,
        isAvailableForSale: false
    }
];
let newCar = {
        carBrand: 'Ford',
        price: 4000,
        isAvailableForSale: false
    };

    cars.push(newCar);
    console.log(cars);