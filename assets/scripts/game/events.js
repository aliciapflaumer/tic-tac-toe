'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// game events

let turn = 'X'

// setting up event listener
// "div[id^='cell']"
$('.box').on('click', function (event) {
  event.preventDefault()

  console.log(this)


 if ($(this).val() === '') {
   // target element that we click on and change text

    if (turn === 'X') {
      $(this).text('X')
      turn = 'O'
    } else {
      $(this).text('O')
      turn = 'X'
    }
 }


})

if ('.box' > 'X' || 'O').html() !== '') {
  $
}
