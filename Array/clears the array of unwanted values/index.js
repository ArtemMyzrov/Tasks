/**
 * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
 * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */

const data = [0, 1, false, 2, undefined, '', 3, null]

const compact = (array) => {
  const x = [0, false, undefined, '', null]
  const rez = []
  for (let i = 0; i < array.length; i++)
    if (!x.includes(array[i])) {
      rez.push(array[i])
    }

  return rez
}
console.log(compact(data))
