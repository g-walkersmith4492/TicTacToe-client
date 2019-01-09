'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./game/events')

$(() => {
  $('#box1').on('click', events.clickBoxOne)
  $('#box2').on('click', events.clickBoxTwo)
  $('#box3').on('click', events.clickBoxThree)
  $('#box4').on('click', events.clickBoxFour)
  $('#box5').on('click', events.clickBoxFive)
  $('#box6').on('click', events.clickBoxSix)
  $('#box7').on('click', events.clickBoxSeven)
  $('#box8').on('click', events.clickBoxEight)
  $('#box9').on('click', events.clickBoxNine)
  $('.signupform').on('submit', events.onSignUp)
  $('.signinform').on('submit', events.onSignIn)
  $('.changepasswordform').on('submit', events.onChangePassword)
  $('#signoutbutton').on('click', events.onSignOut)
  $('#creategamebutton').on('click', events.onCreateGame)
  $('#getwinsbutton').on('click', events.onGetOverGames)
})
