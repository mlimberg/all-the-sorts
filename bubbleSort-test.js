const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const bubbleSort = require('./bubbleSort')

describe('Bubble sort', () => {
  it('should exist', () => {
    expect(bubbleSort).to.exist
  })

  it('should return an array of equal length', () => {
    expect(bubbleSort([1,2,3])).to.have.length(3)
  })

  it('should have the lowest value last', () => {
    const answer = bubbleSort([5,2,4,3,1])
    expect(answer[answer.length - 1]).to.equal(5)
  })

  it('should order the entire array lowest to heighest', () => {
    const answer = bubbleSort([5, 2, 4, 3, 1])
    expect(answer).to.deep.equal([1,2,3,4,5])
  })

  it('should order the entire array alphabetically', () => {
    const answer = bubbleSort(['e', 'c', 'd', 'b', 'a'])
    expect(answer).to.deep.equal(['a', 'b', 'c', 'd', 'e'])
  })
})
