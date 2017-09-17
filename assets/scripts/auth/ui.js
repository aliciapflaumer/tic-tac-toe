'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed up')
  $('#message').text('Successfully signed up')
  // console.log(this)
}

const signUpFailure = function (error) {
  // console.error(error)
  $('#message').text('Error on sign up. You may already be signed in.')
  $('.newGame').hide()
  // console.log(this)
}

const signInSuccess = function (data) {
  console.log(data)
  console.log('Arrived at Sign in success!')

  $('#message').text('Successfully signed in')
  store.user = data.user
  console.log('store.user console log data is ' + data.user)
  // $( ".game-board" ).show()
}

const signInFailure = function (error) {
  // console.error(error)
  $('#message').text('Error on sign in. Did you enter your email and password correct?')
  $('.newGame').hide()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('#message').text('Successfully changed password!')
}

const changePasswordFailure = function (error) {
  // console.log(error)
  $('#message').text('Error on change password!')
}

const signOutSuccess = function () {
  // console.log('Successfully signed out')
  $('#message').text('Successfully signed out!')
  store.user = null // empty store
  $('#getGamesBtn').hide()
}

const signOutFailure = function (error) {
  // console.log(error)
  $('#message').text('Error on sign out!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
