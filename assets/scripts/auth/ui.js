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
  $('#message').text('Error on sign up')
  // console.log(this)
}

const signInSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully signed in')
  $('#message').text('Successfully signed in')
  store.user = data.user
  // console.log('store.user console log data is ' + store.user)
}

const signInFailure = function (error) {
  // console.error(error)
  $('#message').text('Error on sign in')
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
