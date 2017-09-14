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

}

const updateGameFail = function (data) {
  console.log(data)
}


// const showGamesSuccess = function (data) {
//
// }

module.exports = {
  createGameSuccess,
  createGameFail,
  updateGameSuccess,
  updateGameFail,
  // showGamesSuccess
}
