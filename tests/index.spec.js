import { expect } from 'chai'
import { sum, sub, multi, div } from '../src/index'

describe('Calculator', () => {
  describe('Smoke test', () => {
    it('should exists the method `sum`', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })

    it('should exists the method `sub`', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })

    it('should exists the method `multi`', () => {
      expect(multi).to.exist
      expect(multi).to.be.a('function')
    })

    it('should exists the method `div`', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })
  })

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      var result = sum(2, 2)
      expect(result).to.be.equal(4)
    })
  })

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      var result = sub(6, 2)
      expect(result).to.be.equal(4)
    })
  })

  describe('Multi', () => {
    it('should return 4 when `multi(2, 2)`', () => {
      var result = multi(2, 2)
      expect(result).to.be.equal(4)
    })
  })

  describe('Div', () => {
    it('should return 4 when `div(8, 2)`', () => {
      var result = div(8, 2)
      expect(result).to.be.equal(4)
    })

    it('should return 0 when divide by zero `div(10, 0)`', () => {
      var result = div(10, 0)
      expect(result).to.be.equal(0)
    })

    it('should return 0 when `div(0, 3)`', () => {
      var result = div(0, 3)
      expect(result).to.be.equal(0)
    })
  })
})
