/**
 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
 * Сложность задачи: 2 of 5
 * @param {Array<string | number>} array - Массив с примитивными значениями
 * @returns {Array}
 */

const unique = (array) => {
  let x = array.filter((item, index) => array.indexOf(item) === index)

  return x
}

const data = [1, 2, 1, 2, 3]
console.log(unique(data)) // [1, 2, 3]
