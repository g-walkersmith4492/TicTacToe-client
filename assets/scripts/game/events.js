const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Below is the function to sign up for the game
const onSignUp = (event) => {
  event.preventDefault()
  console.log('Successfully Sign Up')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  $('.signupform').trigger('reset')
}

// Below is the function to sign in to the game using token

const onSignIn = (event) => {
  event.preventDefault()
  console.log('Successfully Sign In')
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
  $('.signinform').trigger('reset')
}

// Below is the function to change the user's password
const onChangePassword = (event) => {
  event.preventDefault()
  console.log('Successfully Changed Password')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('changepasswordform').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()
  console.log('Successfully Signed Out')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateGame = (event) => {
  event.preventDefault()
  console.log('You have created a game!')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onGetGames = (event) => {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetExampleSuccess)
    .catch(ui.onGetExampleFailure)
}

const onSubmitTurn = (event) => {
  event.preventDefault()
  console.log('You have submited a ')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('changepasswordform').trigger('reset')
}

// board array which stores player moves and sends to API
let playerMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const playerOne = 'X'
const playerTwo = 'O'
let gameWinner = null

// variable is used to store previous moves in order to alternate between X and O
let lastMove = null

// This is the function for the resfresh button, which clears the board
const refreshGame = function () {
  $('.box').html('')
  playerMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  lastMove = null
  gameWinner = null
  $('.displaywinner').html('New Game!!').css('color', 'black')
}

// This is the code to determine who has one the game
const checkWinner = function () {
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    gameWinner = playerOne
    $('h2').html('Player One Wins!')
  } else if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    gameWinner = playerTwo
  } else if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    gameWinner = playerOne
  } else if (playerMoves[3] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    gameWinner = playerTwo
  } else if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    gameWinner = playerOne
  } else if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    gameWinner = playerTwo
  } else if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    gameWinner = playerOne
  } else if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    gameWinner = playerTwo
  } else if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    gameWinner = playerOne
  } else if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    gameWinner = playerTwo
  } else if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    gameWinner = playerOne
  } else if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    gameWinner = playerTwo
  } else if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    gameWinner = playerOne
  } else if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    gameWinner = playerTwo
  } else if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    gameWinner = playerOne
  } else if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    gameWinner = playerTwo
  } if (gameWinner === playerOne) {
    $('.displaywinner').html('Player One Wins!').css('color', 'green')
  } else if (gameWinner === playerTwo) {
    $('.displaywinner').html('Player Two Wins!').css('color', 'blue')
  }
}

const clickBoxOne = $('#box1').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box1').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[0] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[0] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false && gameWinner === null) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxTwo = $('#box2').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box2').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[1] = playerTwo

        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[1] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxThree = $('#box3').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box3').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[2] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[2] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxFour = $('#box4').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box4').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[3] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[3] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxFive = $('#box5').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box5').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[4] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[4] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxSix = $('#box6').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box6').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[5] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[5] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxSeven = $('#box7').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box7').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[6] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[6] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxEight = $('#box8').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box8').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[7] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[7] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
    }
  }
})

const clickBoxNine = $('#box9').on('click', function (event) {
  if (gameWinner === null) {
    if ($('#box9').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[8] = playerTwo
        lastMove = playerTwo
      } else {
        (event.target).append(playerOne)
        playerMoves[8] = playerOne
        lastMove = playerOne
      }
    }
    checkWinner()
    if (playerMoves.includes(0) === false) {
      $('.displaywinner').html('The Game is a DRAW!!!').css('color', 'red')
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
  clickBoxNine: clickBoxNine,
  refreshGame: refreshGame,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onCreateGame: onCreateGame,
  onGetGames: onGetGames
}
