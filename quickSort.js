var unsorted = [ 5, 2, 7, 3, 9, 4, 1, 10, 15, 12, 8 ];

function quickSort (arr) {

  if (arr.length === 1) {
    return arr;
  }

  // set pivot to last element index
  var pIndex = arr.length - 1;
  var cIndex = 0;

  while (pIndex !== cIndex) {

    if (cIndex < pIndex) {

      if (arr[cIndex] > arr[pIndex]) {
        [ arr[cIndex], arr[pIndex] ] = [ arr[pIndex], arr[cIndex] ];
        [ cIndex, pIndex ] = [ pIndex, cIndex ]
      }
      cIndex++;
    } else {

      if (arr[cIndex] < arr[pIndex]) {
        [ arr[cIndex], arr[pIndex] ] = [ arr[pIndex], arr[cIndex] ];
        [ cIndex, pIndex ] = [ pIndex, cIndex ]
      }
      cIndex--;
    }

  }

  if (pIndex < arr.length) {
    var right = arr.splice(pIndex, arr.length)
    right = quickSort(right);
    arr.push(...right);
  }

  if (pIndex > 0) {
    var left = arr.splice(0, pIndex);
    left = quickSort(left);
    arr.unshift(...left);
  }

  return arr;
}

module.exports = quickSort;
