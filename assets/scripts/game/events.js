// board array which stores player moves and sends to API
let playerMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const playerOne = 'X'
const playerTwo = 'O'
let gameWinner= null

// variable is used to store previous moves in order to alternate between X and O
let lastMove = null

// This is the function for the resfresh button, which clears the board
const refreshGame = function () {
  $('.box').html('')
  playerMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  lastMove = null
}

// This is the code to determine who has one the game
if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
} else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
} else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
} else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
} else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
} else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
} else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
} else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
  alert('Player One has won the game!')
  gameWinner = playerOne
} else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
  alert('Player two has won the game!')
  gameWinner = playerTwo
}

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
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  }
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  }
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  }
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  }
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  }
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  }
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[4] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    alert('Player two has won the game!')
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    alert('Player One has won the game!')
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    alert('Player two has won the game!')
  }
  if (playerMoves.includes(0) === false) {
    alert('The game is a DRAW!')
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
  clickBoxNine: clickBoxNine,
  refreshGame: refreshGame,
  playerMoves: playerMoves
}
