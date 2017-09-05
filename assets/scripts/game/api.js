'use strict'

const config = require('../config')
const store = require('../store')

// const createGame = function (data) {
//   // Start game with player X
//   store.player = 'X'
//   store.counter = 0
//   return $.ajax({ // return ajax then set up, url, method, data
//     url: config.apiOrigin.production + '/games/' + store.user.token,
//     method: 'POST',
//     // add Token
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
//   .then((response) => {
//     store.game = response.game
//   })
// }
