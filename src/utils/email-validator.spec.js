const EmailValidator = require('./email-validator')
const validator = require('validator')

const makeSut = () => { return new EmailValidator() }
describe('Email Validator', () => {
  test('Shold return true if Validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('Shold return false if Validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })
})
