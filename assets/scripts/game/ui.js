'use strict'

const store = require('../store')

const player1WinsSuccess = function (data) {
  console.log(data)
  console.log('Player 1 Wins!')
  $('#message').text('Player 1 Wins!')
  console.log(this)
}

const player2WinsSuccess = function (data) {
  console.log(data)
  console.log('Player 2 Wins!')
  $('#message').text('Player 2 Wins!')
  console.log(this)
}

module.exports = {
  player1WinsSuccess,
  player2WinsSuccess
}
