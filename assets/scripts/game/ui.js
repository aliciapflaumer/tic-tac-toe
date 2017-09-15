'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  // console.log(data)
  // console.log('Successfully created game!')
  $('#game-message').text("It\'s X\'s turn!").fadeOut(5000)
  $('#message').hide()
}

const createGameFail = function (data) {
  // console.log(data)
  $('#message').text("There seems to be an error creating game!")
}


const updateGameSuccess = function (data) {
  console.log(data)
  console.log('updateGameSuccess ui function reached')

}

const updateGameFail = function (data) {
  console.log(data)
}


const getGamesSuccess = function (data) {
  console.log('getGamesSuccess ui function reached')
  // $('#game-message').text('You have played XX times').fadeIn(5000)
  $('#game-message').text('You have played ' + data.games.length + ' times').fadeIn(5000)
}

module.exports = {
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  getGamesSuccess
}
