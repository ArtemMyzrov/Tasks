/**
  * Описание задачи: Напишите функцию, которая возвращает объект, 
  составленный из значений вложенных массивов. 
  Первое значение - ключ, второе - зачение.
  * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
  * Сложность задачи: 2 of 5
  * @param {Array} array - массив, значения которого массивы пар
  * @returns {Array}
*/

const fromPairs = (array) => {
  let x = {}
  for (let [key, value] of array) {
    x[key] = value
  }
  return x
}

// const fromPairs = (array) => {
//   let x = Object.fromEntries(array)
//    return x
// }

const data = [
  ['a', 1],
  ['b', 2],
]
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }
