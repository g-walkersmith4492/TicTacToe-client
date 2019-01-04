'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const playerMoves = [null, null, null, null, null, null, null, null, null]

let lastMove = null
const playerOne = 'X'
const playerTwo = 'O'

$(() => {
  $('#box1').on('click', function () {
    if ($('#box1').html() === '') {
      (event.target).append(playerOne)
      playerMoves[0] = playerOne
      lastMove = playerOne
    }
  })
  $('#box2').on('click', function () {
    if ($('#box2').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[1] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[1] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
  $('#box3').on('click', function () {
    if ($('#box3').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[2] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[4] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
  $('#box4').on('click', function () {
    if ($('#box4').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[3] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[3] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
  $('#box5').on('click', function () {
    if ($('#box5').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[4] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[4] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
  $('#box6').on('click', function () {
    if ($('#box6').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[5] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[5] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
  $('#box7').on('click', function () {
    if ($('#box7').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[6] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[6] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
  $('#box8').on('click', function () {
    if ($('#box8').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[7] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[7] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
  $('#box9').on('click', function () {
    if ($('#box9').html() === '') {
      if (lastMove === playerTwo) {
        (event.target).append(playerOne)
        playerMoves[8] = playerOne
        console.log(playerMoves)
        lastMove = playerOne
      } else {
        (event.target).append(playerTwo)
        playerMoves[8] = playerTwo
        console.log(playerMoves)
        lastMove = playerTwo
      }
    }
  })
})
