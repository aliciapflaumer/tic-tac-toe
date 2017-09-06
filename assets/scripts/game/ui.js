'use strict'

const store = require('../store')

const player1WinsSuccess = function (data) {
  $('#game-message').text('Player X Wins!')
  console.log(this)
}

const player2WinsSuccess = function (data) {
  $('#game-message').text('Player O Wins!')
  console.log(this)
}

module.exports = {
  player1WinsSuccess,
  player2WinsSuccess
}
