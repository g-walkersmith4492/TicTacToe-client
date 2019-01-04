'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const playerMoves = []

const playerOne = 'X'
const playerTwo = 'O'

$(() => {

    $('#box1').on('click', function () {
      if ($('#box1').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box2').on('click', function () {
      if ($('#box2').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box3').on('click', function () {
      if ($('#box3').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box4').on('click', function () {
      if ($('#box4').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box5').on('click', function () {
      if ($('#box5').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box6').on('click', function () {
      if ($('#box6').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box7').on('click', function () {
      if ($('#box7').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box8').on('click', function () {
      if ($('#box8').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
    $('#box9').on('click', function () {
      if ($('#box9').html('')) {
        event.preventDefault()
        if (playerMoves.length % 2 === 0) {
          (event.target).append(playerOne)
          playerMoves.push(playerOne)
          console.log(playerMoves)
        } else {
          (event.target).append(playerTwo)
          playerMoves.push(playerTwo)
          console.log(playerMoves)
        }
      }
    })
  })
