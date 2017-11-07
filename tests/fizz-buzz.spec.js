/**
 * Desafio FizzBuzz
 *
 * Escreva uma lib que receba uma número e:
 *
 * Se o número for divisível por 3, no lugar do número escreva 'Fizz'
 * Se o número for divisível por 5, no lugar do número escreva 'Buzz'
 * Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
 * Se o número não for multiplo de nada, retorne o número
 */

import { expect } from 'chai'
import FizzBuzz from '../src/fiizz-buzz'

describe('FizzBuzz', () => {
  it('should return `fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz')
    expect(FizzBuzz(6)).to.be.equal('Fizz')
  })

  it('should return `buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz')
    expect(FizzBuzz(10)).to.be.equal('Buzz')
  })

  it('should return `fizzbuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
  })

  it('should return the number when non-multilple', () => {
    expect(FizzBuzz(17)).to.be.equal(17)
  })
})
