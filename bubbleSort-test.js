const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const bubbleSort = require('./bubbleSort')

describe('bubbleSort', () => {
  it('should exist', () => {
    expect(bubbleSort).to.exist
  })

  it('should return an array of equal length', () => {
    expect(bubbleSort([1,2,3])).to.have.length(3)
  })

  it('should sort the array lowest to highest', () => {
    const answer = bubbleSort([5,2,4,3,1])
    expect(answer[answer.length - 1]).to.equal(5)
  })
})
