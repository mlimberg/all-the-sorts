const bubbleSort = (array) => {
  for(let j = 0; j < array.length; j++) {
    let done = true
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        [array[i], array[i+1]] = [array[i + 1], array[i]]
        done = false
      }
    }
  }
  return array
}

module.exports = bubbleSort
