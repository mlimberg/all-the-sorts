const mergeSort = (arr) => {
  if (arr.length < 2) { return arr }

  const middle = parseInt(arr.length / 2);
  const left   = arr.slice(0, middle);
  const right  = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {

  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
        result.push(left.shift())
    } else {
        result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

module.exports = mergeSort
