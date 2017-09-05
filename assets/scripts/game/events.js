'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// game events

// check whose turn it is
// if it's x's turn place value into cell
// if it's not x's turn place the value o into cell
// if it's o's turn fill cell with an o,
// else stop x from filling a square and fill square with o
// if one player gets 3 in a row, show player wins in ui.js
// and end play so no one can play anymore squares


// const onClickMove = function () {
// // if player 1 clicks cell, fill cell with an x
// $("div[id^='cell']").on('click', function (event) {
//   event.preventDefault()
// console.log(this)
// // target element that we click on and change text
//  // $(this).text("X")
// })
// }
// onClickMove()


// const postCreateGameSuccess = function () {
//   store.game = data.game
// }
//
// // Event handlers for when users click on game cells
// const onClickCellZero = function (event) {
//   const data = getFormFields(this)
//
//     if (store.game.cells[0] === '') {
//       store.game.cells[0] = 'X'
//       console.log(store.game.cells[0])
//     } else {
//       if (store.game.cells[0] !== '') {
//         console.log('this cell is full!')
//       }
//     }
//   event.preventDefault()
//   api.onClickCellZero()
//     .then(ui.onClickCellZero)
//     .catch(ui.onClickCellZero)
// }
// const addHandlers = function () {
//   $('#cell0').on('click', onClickCellZero)
// }

const turn = 'X'
const otherTurn = 'O'

$("div[id^='cell']").on('click', function (event) {
  event.preventDefault()
  console.log(this)
// target element that we click on and change text
 $(this).text(turn)

})

// module.exports = {
//   addHandlers
// }
