const store = require('../store')
const events = require('./events')
const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('.authusernotification').text('You have succesfully signed up!')
  $('.signinform').css('visibility', 'visible')
}

const onSignUpFailure = () => {
  $('.authusernotification').text('Error on sign up!')
}

const onSignInSuccess = (responseData) => {
  console.log(responseData)
  store.user = responseData.user
  $('.gamebuttons').css('visibility', 'visible')
  $('.signinform').css('visibility', 'hidden')
  $('.signupform').css('visibility', 'hidden')
  $('.authusernotification').text('You have succesfully signed in!')
  $('.changepasswordform').css('visibility', 'visible')
}

const onSignInFailure = () => {
  $('.authusernotification').text('Error on sign in!!')
}

const onChangePasswordSuccess = () => {
  $('.authusernotification').text('You have succesfully changed your password!')
  $('.changepasswordform').css('visibility', 'hidden')
}

const onChangePasswordFailure = () => {
  $('.authusernotification').text('Error on Change Password')
}

const onSignOutSuccess = () => {
  store.user = null
  $('.authusernotification').text('You have successfully signed out!!').css('color', 'green')
  $('.gamebuttons').css('visibility', 'hidden')
  $('.signinform').css('visibility', 'visible')
  $('.changepasswordform').css('visibility', 'hidden')
  $('.signupform').css('visibility', 'visible')
  $('.box').css('visibility', 'hidden')
  $('.usernotification').css('visibility', 'hidden')
}

const onSignOutFailure = () => {
  $('.authusernotification').text('Error on sign out').css('color', 'red')
}

const onCreateGameSuccess = (responseData) => {
  console.log(responseData)
  store.game = responseData.game
  $('.box').css('visibility', 'visible')
  $('.usernotification').css('visibility', 'visible')
}

const onCreateGameFailure = () => {
  $('.usernotification').text('Failure').css('color', 'red')
}

const onGetOverGamesSuccess = (responseData) => {
  console.log(responseData)
  console.log(responseData.games.length)
  $('.usernotification').text(`You have won ${responseData.games.length} games!`)
}

const onGetOverGamesFailure = (responseData) => {
  $('.usernotification').text(`You have not won any games!`)
}

const onUpdateGameSuccess = (responseData) => {
}

const onUpdateGameFailure = () => {
  console.log('Failure to create move!')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignInSuccess: onSignInSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onCreateGameSuccess: onCreateGameSuccess,
  onCreateGameFailure: onCreateGameFailure,
  onUpdateGameSuccess: onUpdateGameSuccess,
  onUpdateGameFailure: onUpdateGameFailure,
  onGetOverGamesSuccess: onGetOverGamesSuccess,
  onGetOverGamesFailure: onGetOverGamesFailure

}
