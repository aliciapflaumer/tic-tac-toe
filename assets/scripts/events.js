

// const turn = 'x' // if x's turn
// const changeTurn = // if not x put an o

// Start with empty board of 9 cells
// const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

// if you click any cell fill an x or o
const onClick = function () {

// on the click of any divs with ids that begin
// with cell want to change text
  $("div[id^='cell']").on('click', function (event) {
    console.log(this)
    // target element that we click on and change text
     $(this).text('o')
  })
}

onClick()

// if it's x's turn fill cell with an x,
// else fill square with o
//
module.exports = {
  onClick
}
