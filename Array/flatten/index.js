// Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный.
// Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее.

/**
 * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
 * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Глубокий массив
 * @returns {Array}
 */

// const flatten = (array) => {
// const x = array.join().split().map(item=> Number(item))
// return x

// }

const flatten = (array) => {
  let a = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      a = a.concat(flatten(array[i]))
    } else {
      a.push(array[i])
    }
  }
  return a
}

const data = [[6, 7], 1, 2, [3, 4, [5]]]
console.log(flatten(data)) // [1, 2, 3, 4, 5]
