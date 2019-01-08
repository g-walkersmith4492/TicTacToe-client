const store = require('../store')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('.signupform').css('visibility', 'hidden')
  $('.usernotification').text('You have succesfully signed up!')
}

const onSignUpFailure = () => {
  $('.usernotification').text('Error on sign up!')
}

const onSignInSuccess = (responseData) => {
  console.log(responseData)
  store.user = responseData.user
  $('.gamebuttons').css('visibility', 'visible')
  $('.signinform').css('visibility', 'hidden')
  $('.signupform').css('visibility', 'hidden')
  $('.usernotification').text('You have succesfully signed in!')
  $('.changepasswordform').css('visibility', 'visible')
}

const onSignInFailure = () => {
  $('.usernotification').text('Error on sign in!!')
}

const onChangePasswordSuccess = () => {
  $('.usernotification').text('You have succesfully changed your password!')
}

const onChangePasswordFailure = () => {
  $('.usernotification').text('Error on Change Password')
}

const onSignOutSuccess = () => {
  store.user = null
  $('.usernotification').text('You have successfully signed out!!').css('color', 'green')
  console.log('Store is', store)
  $('.gamebuttons').css('visibility', 'hidden')
  $('.signinform').css('visibility', 'visible')
  $('.usernotification').text('You have succesfully signed out!')
  $('.changepassworddiv').css('visibility', 'hidden')
  $('.signupform').css('visibility', 'visible')
  $('.box').css('visibility', 'hidden')
}

const onSignOutFailure = () => {
  $('.usernotificatione').text('Error on sign out').css('color', 'red')
}

const onCreateGameSuccess = (responseData) => {
  console.log(responseData)
  store.game = responseData.game
  $('.usernotification').text('You have created a game!')
  $('.box').css('visibility', 'visible')
}

const onCreateGameFailure = () => {
  $('#user-message').text('Failure').css('color', 'red')
}

const onGetGamesSuccess = (responseData) => {
  console.log(responseData)
}

const onGetOverGamesSuccess = (responseData) => {
  console.log(responseData)
  console.log(responseData.games.length)
  $('.usernotification').text(`You have won ${responseData.games.length} games!`)
}

const onGetOverGamesFailure = (responseData) => {
  console.log('failure')
}

const onGetGamesFailure = () => {
  $('#user-message').text('Error').css('color', 'red')
}

const onUpdateGameSuccess = (responseData) => {
  console.log('Created Move!')
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
  onGetGamesSuccess: onGetGamesSuccess,
  onGetGamesFailure: onGetGamesFailure,
  onUpdateGameSuccess: onUpdateGameSuccess,
  onUpdateGameFailure: onUpdateGameFailure,
  onGetOverGamesSuccess: onGetOverGamesSuccess,
  onGetOverGamesFailure: onGetOverGamesFailure

}
