// Search for duplicate elements: Write a function that takes an array and returns a new array containing only duplicate elements of the original array.

// Example:
// passed [4, 6, 3, 1, 6, 7, 8, 3] returned [6, 3]

const array = [4, 6, 3, 1, 6, 7, 8, 6, 3]
// const x = new Set(array)
// console.log(...x)

// function dd (a){

// let arr= new Set([])
// for(let i=0; i<a.length; i++){
//   for(let s=0; s<a.length; s++)
//     if(i!=s && a[i]===a[s]){
//       arr.add(a[i])

//     }

//  }
//   return [...arr]
// }

function dd(a) {
  let arr = []
  for (let i = 0; i < a.length; i++) {
    let c = a.filter((item) => item == a[i])
    if (c.length > 1 && arr.includes(a[i]) == false) {
      arr.push(a[i])
    }
  }
  return [...arr]
}
console.log(dd(array))

// const a = [1,2,3]
// const b = new Set(a)
// console.log(...b)
// console.log(a.filter(( num)=> b.has(num)))

// function dd (a){

// let arr=[]
// for(let i=0; i<a.length; i++){
//  let c = a.slice(i+1)
// if(c.includes(a[i])&& !arr.includes(a[i])){
//   arr.push(a[i])
// }

//  }
//   return arr
// }
