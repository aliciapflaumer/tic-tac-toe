'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed up')
  $('#message').text('Successfully signed up')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully signed in')
  $('#message').text('Successfully signed in')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
}
