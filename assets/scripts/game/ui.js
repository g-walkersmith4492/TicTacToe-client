const store = require('../store')

$('.changepasswordform').hide()
$('.box').hide()
$('.navbuttons').hide()
$('.usernotification').show()

const onSignUpSuccess = (responseData) => {
  $('.authusernotification').text('You have succesfully signed up!')
  $('.signinform').show()
}

const onSignUpFailure = () => {
  $('.authusernotification').text('Error on sign up!')
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  $('.navbuttons').show()
  $('.signinform').hide()
  $('.signupform').hide()
  $('.authusernotification').text('Click Create a New Game to Start!!')
  $('.changepasswordform').show()
  $('.changepasswordform').trigger('reset')
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
  $('.navbuttons').hide()
  $('.signinform').show()
  $('.changepasswordform').hide()
  $('.signupform').show()
  $('.box').hide()
  $('.usernotification').hide()
  $('.totalgamesnotification').hide()
}

const onSignOutFailure = () => {
  $('.authusernotification').text('Error on sign out').css('color', 'red')
}

const onCreateGameSuccess = (responseData) => {
  store.game = responseData.game
  $('.box').show()
  $('.usernotification').show()
  $('.totalgamesnotification').hide()
}

const onCreateGameFailure = () => {
  $('.usernotification').text('Failure').css('color', 'red')
}

const onGetOverGamesSuccess = (responseData) => {
  $('.totalgamesnotification').show()
  $('.totalgamesnotification').text(`Player X has won  ${responseData.games.length} games!`)
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
