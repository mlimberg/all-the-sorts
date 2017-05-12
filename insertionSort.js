const insertionSort = (array) => {
  let i, j;
  for(i = 1; i < array.length; i++) {
    let current = array[i]
    for(j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j+1] = array[j]
    }
    array[j+1] = current
  }
  return array
}

module.exports = insertionSort

// console logs entire process so you see what i, temp and j are all throughout

// const insertionSort = (array) => {
//   for(let i = 1; i < array.length; i++) {
//   //  console.log('i ', i)
//     let temp = array[i];
//   //  console.log('temp ', temp)
//     for(let j = i - 1; j >= 0 && array[j] > temp; j--) {
//   //  console.log('j ', j)
//       array[j+1] = array[j];
//   //  console.log('array j loop ', array)
//     }
//   //  console.log('j after loop ', j)
//     array[j+1] = temp;
//   //  console.log('array after loop ', array)
//   }
//
//   return array;
// }
