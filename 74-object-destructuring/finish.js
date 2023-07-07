/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}

const shortPerson = (person) => {
  const {name: n, info: {country: c, age: a}, postsQuantity: p =0} = person

  return {
    n,
    c,
    a,
    p,
}
}

console.log(shortPerson(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }

/**
 * создаем функцию shortPerson, которая принимает объект person в качестве параметра.
 * В функции применяем деструктуризацию объекта person, чтобы извлечь нужные свойства. 
 * определяем переменные name, info и postsQuantity, которые соответствуют свойствам объекта person.
 * продолжаем деструктуризацию внутри объекта info, чтобы извлечь свойства country и age, и присваиваем их переменным country и age
 * 
 */

