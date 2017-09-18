'use strict'

const store = require('../store')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected')
}

const signUpSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed up')
  $('#message').text('Successfully signed up')
  $('#sign-up').show()
  resetForm($('#sign-up'))
  // console.log('Is the form empty now?')
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up. You may already be signed in.')
  $('#sign-up').show()
  $('.newGame').hide()
  resetForm($('#sign-up'))
  // console.log(this)
}

const signInSuccess = function (data) {
  // console.log(data)
  // console.log('Arrived at Sign in success!')

  $('#message').text('Successfully signed in')
  store.user = data.user
  // console.log('store.user console log data is ' + data.user)
  resetForm($('#sign-in'))
  // console.log('Is the form empty now?')
}

const signInFailure = function (error) {
  // console.error(error)
  $('#message').text('Error on sign in. Did you enter your email and password correct?')
  $('.newGame').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  resetForm($('#sign-up'))
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('#message').text('Successfully changed password!')
  resetForm($('#change-password'))
}

const changePasswordFailure = function (error) {
  // console.log(error)
  $('#message').text('Error on change password!')
  resetForm($('#sign-up'))
}

const signOutSuccess = function () {
  // console.log('Successfully signed out')
  $('#message').text('Successfully signed out!')
  store.user = null // empty store
  $('#getGamesBtn').hide()
  $('#game-message').hide()
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
