'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateGame = function (data) {
  console.log('updateGame api function reached')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games' + store.game.id,
    method: 'PATCH',
    contentType: 'application/json',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getGames = function (data) {
  console.log('getGames api function reached')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    contentType: 'application/json',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames
}
