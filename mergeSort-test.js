const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const mergeSort = require('./mergeSort')

describe('Merge Sort', () => {
  it('does some magic', () => {
    const array = [6, 3, 8, 2, 1, 4, 5, 7]

    mergeSort(array)

  })
})
