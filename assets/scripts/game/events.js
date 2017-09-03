'use strict'

// check whose turn it is
// if it's x's turn place value into cell
// if it's not x's turn place the value o into cell
// if it's o's turn fill cell with an o,
// else stop x from filling a square and fill square with o
// if one player gets 3 in a row, show player wins in ui.js
// and end play so no one can play anymore squares

const turn = "X"
const moves = 0

// Start with empty board of 9 cells
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

const onClickMove = function () {
// if player 1 clicks cell, fill cell with an x
$("div[id^='cell']").on('click', function (event) {
  event.preventDefault()
// console.log(this)
// target element that we click on and change text
 $(this).text(turn)
})

}
onClickMove()



module.exports = {

}
