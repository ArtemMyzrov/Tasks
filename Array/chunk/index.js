// Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

/**
 * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
 * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Массив элементов
 * @param {number} size - Размер чанков
 * @returns {Array}
 */

const chunk = (array, size) => {
  const res = []
  for (let i = 0; i < array.length; i += size) {
    const x = array.slice(i, i + size)
    console.log(i)
    res.push(x)
  }
  return res
}

// function spliceIntoChunks(arr, chunkSize) {
//     const res = [];
//     while (arr.length > 0) {
//         const chunk = arr.splice(0, chunkSize);
//         res.push(chunk);
//     }
//     return res;
// }

const data = [1, 2, 3, 4, 5, 6, 7]
console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
