const playerMoves = [null, null, null, null, null, null, null, null, null]
const playerOne = 'X'
const playerTwo = 'O'
let lastMove = null

const clickBoxOne = $('#box1').on('click', function (event) {
  if ($('#box1').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[0] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[0] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})
const clickBoxTwo = $('#box2').on('click', function (event) {
  if ($('#box2').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[1] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[1] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})
const clickBoxThree = $('#box3').on('click', function (event) {
  if ($('#box3').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[2] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[2] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})
const clickBoxFour = $('#box4').on('click', function (event) {
  if ($('#box4').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[3] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[3] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})
const clickBoxFive = $('#box5').on('click', function (event) {
  if ($('#box5').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[4] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[4] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})
const clickBoxSix = $('#box6').on('click', function (event) {
  if ($('#box6').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[5] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[5] = playerOne
      console.log(playerMoves)

      lastMove = playerOne
    }
  }
})
const clickBoxSeven = $('#box7').on('click', function (event) {
  if ($('#box7').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[6] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[6] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})
const clickBoxEight = $('#box8').on('click', function (event) {
  if ($('#box8').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[7] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[7] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})
const clickBoxNine = $('#box9').on('click', function (event) {
  if ($('#box9').html() === '') {
    if (lastMove === playerOne) {
      (event.target).append(playerTwo)
      playerMoves[8] = playerTwo
      console.log(playerMoves)
      lastMove = playerTwo
    } else {
      (event.target).append(playerOne)
      playerMoves[8] = playerOne
      console.log(playerMoves)
      lastMove = playerOne
    }
  }
})

module.exports = {
  clickBoxOne: clickBoxOne,
  clickBoxTwo: clickBoxTwo,
  clickBoxThree: clickBoxThree,
  clickBoxFour: clickBoxFour,
  clickBoxFive: clickBoxFive,
  clickBoxSix: clickBoxSix,
  clickBoxSeven: clickBoxSeven,
  clickBoxEight: clickBoxEight,
  clickBoxNine: clickBoxNine
}
