'use strict'

const store = require('../store')

const createGameSuccess = function() {
  $('#message').text("It\'s X\'s turn!")
}

const createGameFail = function() {
  $('#message').text("There seems to be an error creating game!")
}

module.exports = {
  createGameSuccess
}
