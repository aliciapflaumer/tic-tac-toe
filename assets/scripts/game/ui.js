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


// const updateGameSuccess = function (data) {
//   // console.log(data)
//   // console.log('updateGameSuccess ui function reached')
//
// }
//
// const updateGameFail = function (data) {
//   // console.log(data)
// }


const getGamesSuccess = function (data) {
  // console.log('getGamesSuccess ui function reached')
  $('#game-message').text('Game number ' + data.games.length).fadeIn(5000)
}

// const resetGameSuccess = function(data) {
//   console.log('resetGameSuccess ui function reached')
// }

module.exports = {
  createGameSuccess,
  createGameFail,
  // updateGameSuccess,
  // updateGameFail,
  getGamesSuccess
  // resetGameSuccess
}
