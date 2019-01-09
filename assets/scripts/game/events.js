const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Below is the function to sign up for the game
const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  $('.signupform').trigger('reset')
}

// Below is the function to sign in to the game using token

const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
  $('.signinform').trigger('reset')
}

// Below is the function to change the user's password
const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('.changepasswordform').trigger('reset')
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateGame = (event) => {
  $('.usernotification').text('Player X, it is your turn!')
  event.preventDefault()
  api.createGame(playerMoves)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
  $('.box').html('')
  playerMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  lastMove = null
  gameWinner = null
}

const onGetGames = (event) => {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

const onGetOverGames = (event) => {
  event.preventDefault()
  api.getGamesOver()
    .then(ui.onGetOverGamesSuccess)
    .catch(ui.onGetOverGamesFailure)
}

// board array which stores player moves and sends to API
let playerMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const playerOne = 'X'
const playerTwo = 'O'
let gameWinner = null

// variable is used to store previous moves in order to alternate between X and O
let lastMove = null
let isOver = false

const isGameOver = function () {
  if (gameWinner === playerOne) {
    isOver = true
  } else {
    isOver = false
  }
}

// This is the function for the resfresh button, which clears the board
// const refreshGame = function () {
//   $('.box').html('')
//   playerMoves = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   lastMove = null
//   gameWinner = null
//   $('.displaywinner').html('New Game!!').css('color', 'black')
// }

// This is the code to determine who has one the game
const checkWinner = function () {
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    gameWinner = playerOne
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
    $('.usernotification').html('Player One Wins!').css('color', 'green')
  } else if (gameWinner === playerTwo) {
    $('.usernotification').html('Player Two Wins!').css('color', 'blue')
  } isGameOver()
}

const clickBoxOne = function (event) {
  if (gameWinner === null) {
    if ($('#box1').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[0] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 0
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[0] = playerOne
        lastMove = playerOne
        const playerMoveData = 0
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxTwo = function (event) {
  if (gameWinner === null) {
    if ($('#box2').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[1] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 1
        const playerGameCharacter = 'o'
        checkWinner()
        isGameOver()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[1] = playerOne
        lastMove = playerOne
        const playerMoveData = 1
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxThree = function (event) {
  if (gameWinner === null) {
    if ($('#box3').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[2] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 2
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[2] = playerOne
        lastMove = playerOne
        const playerMoveData = 2
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxFour = function (event) {
  if (gameWinner === null) {
    if ($('#box4').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[3] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 3
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[3] = playerOne
        lastMove = playerOne
        const playerMoveData = 3
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxFive = function (event) {
  if (gameWinner === null) {
    if ($('#box5').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[4] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 4
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[4] = playerOne
        lastMove = playerOne
        const playerMoveData = 4
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxSix = function (event) {
  if (gameWinner === null) {
    if ($('#box6').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[5] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 5
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[5] = playerOne
        lastMove = playerOne
        const playerMoveData = 5
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxSeven = function (event) {
  if (gameWinner === null) {
    if ($('#box7').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[6] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 6
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[6] = playerOne
        lastMove = playerOne
        const playerMoveData = 6
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxEight = function (event) {
  if (gameWinner === null) {
    if ($('#box8').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[7] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 7
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[7] = playerOne
        lastMove = playerOne
        const playerMoveData = 7
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const clickBoxNine = function (event) {
  if (gameWinner === null) {
    if ($('#box9').html() === '') {
      if (lastMove === playerOne) {
        (event.target).append(playerTwo)
        playerMoves[8] = playerTwo
        lastMove = playerTwo
        const playerMoveData = 8
        const playerGameCharacter = 'o'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      } else {
        (event.target).append(playerOne)
        playerMoves[8] = playerOne
        lastMove = playerOne
        const playerMoveData = 8
        const playerGameCharacter = 'x'
        checkWinner()
        onCreateMove(playerMoveData, playerGameCharacter, isOver)
      }
    }
  }
}

const onCreateMove = (playerMoveData, playerGameCharacter, isOver) => {
  if (lastMove === playerOne && gameWinner === null && playerMoves.includes(0) === true) {
    $('.usernotification').text('Player O, it is your turn!')
  } else if (lastMove === playerTwo && gameWinner === null) {
    $('.usernotification').text('Player X, it is your turn!')
  }
  const data =
  {
    'game': {
      'cell': {
        'index': playerMoveData,
        'value': playerGameCharacter
      },
      'over': isOver
    }
  }
  if (playerMoves.includes(0) === false && gameWinner === null) {
    $('.usernotification').text('It is a draw!')
  }
  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}
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
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut,
  onCreateGame: onCreateGame,
  onGetGames: onGetGames,
  onCreateMove: onCreateMove,
  onGetOverGames: onGetOverGames,
  lastMove: lastMove
}
