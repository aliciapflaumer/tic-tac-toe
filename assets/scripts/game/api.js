'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
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
  return $.ajax({
    url: config.apiOrigin + '/games/:id' + store.game.id,
    method: 'PATCH',
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
  updateGame
}
