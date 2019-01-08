const store = require('../store')
const onSignUpSuccess = (responseData) => {
  $('.authusernotification').text('You have succesfully signed up!')
  $('.signinform').css('visibility', 'visible')
}

const onSignUpFailure = () => {
  $('.authusernotification').text('Error on sign up!')
}

const onSignInSuccess = (responseData) => {
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
  $('.totalgamesnotification').css('visibility', 'hidden')
}

const onSignOutFailure = () => {
  $('.authusernotification').text('Error on sign out').css('color', 'red')
}

const onCreateGameSuccess = (responseData) => {
  store.game = responseData.game
  $('.box').css('visibility', 'visible')
  $('.usernotification').css('visibility', 'visible')
  $('.totalgamesnotification').css('visibility', 'visible')
}

const onCreateGameFailure = () => {
  $('.usernotification').text('Failure').css('color', 'red')
}

const onGetOverGamesSuccess = (responseData) => {
  $('.totalgamesnotification').css('visibility', 'visible')
  $('.totalgamesnotification').text(`Player One has won  ${responseData.games.length} games (last time I checked)`)
}

const onGetOverGamesFailure = (responseData) => {
  $('.usernotification').text(`You have not won any games!`)
}

const onUpdateGameSuccess = (responseData) => {
}

const onUpdateGameFailure = () => {
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
