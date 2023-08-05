// // Intersection. Напишите функцию,
// которая создаст массив из уникальных значений,
// которые есть в каждом из предоставленных массивов.
// Используйте примитивные типы данных.
/**
  * Описание задачи: Напишите функцию, которая создаст массив из уникальных значений,
  которые есть в каждом из предоставленных массивов.
  * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
  * Сложность задачи: 4 of 5
  * @param {?} arrays - Массив примитивных значений
  * @returns {Array}
*/

const intersection = (...arrays) => {
  let res = []

  for (let i = 0; i < arrays.length; i++) {
    let item = arrays[i]
    let otherArrs = arrays.filter((p) => p !== item)

    for (let x = 0; x < item.length; x++) {
      let letter = item[x]

      if (otherArrs.every((p) => p.includes(letter)) && !res.includes(letter)) {
        res.push(letter)
      }
    }
  }

  return res
}

const arr1 = [1, 2]
const arr2 = [2, 3]
const arr3 = ['a', 'b']
const arr4 = ['b', 'c']
const arr5 = ['b', 'e', 'c']
const arr6 = ['b', 'b', 'e']
const arr7 = ['b', 'c', 'e']
const arr8 = ['b', 'e', 'c']

console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
