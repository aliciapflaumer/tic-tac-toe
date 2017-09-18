'use strict'

const store = require('../store')

const createGameSuccess = function (data) {
  // console.log(data)
  // console.log(store.game.id)
  // console.log('Successfully created game!')
  $('#game-message').text("It\'s X\'s turn!").fadeOut(5000)
  $('#message').hide()
}

const createGameFail = function (data) {
  // console.log(data)
  $('#game-message').text("There seems to be an error creating game!")
}


const updateGameSuccess = function (data) {
  // console.log(data)
  // console.log('updateGameSuccess ui function reached')
  store.game = data.game
}

const updateGameFail = function (data) {
  // console.log(data)
  $('game-message').text('Updating the game did not work.')
}


const getGamesSuccess = function (data) {
  // console.log('getGamesSuccess ui function reached')
  $('#game-message').text('Game number ' + data.games.length).fadeIn(5000).fadeOut(5000)
}

module.exports = {
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  getGamesSuccess
}
