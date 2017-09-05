'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/create',
    method: 'POST',
    data
  })
}


module.exports = {
  createGame
}
