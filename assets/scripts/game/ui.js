const store = require('../store')

const onSignUpSuccess = (responseData) => {
  console.log(responseData)
  $('#user-message').text('You have signed up!').css('color', 'green')
}

const onSignUpFailure = () => {
  $('#user-message').text('Error on sign in!').css('color', 'red')
}

const onSignInSuccess = (responseData) => {
  console.log(responseData)
  store.user = responseData.user
  $('#user-message').text('You have signed in ' + responseData.user.email + '!').css('color', 'green')
  console.log('Store is', store)
}

const onSignInFailure = () => {
  $('#user-message').text('You have not signed in!').css('color', 'red')
}

const onChangePasswordSuccess = () => {
  $('#user-message').text('You have successfully change password!').css('color', 'green')
  console.log('Store is', store)
}

const onChangePasswordFailure = () => {
  $('#user-message').text('Error on Change Password').css('color', 'red')
}

const onSignOutSuccess = () => {
  store.user = null
  $('#user-message').text('You have successfully signed out!!').css('color', 'green')
  console.log('Store is', store)
}

const onSignOutFailure = () => {
  $('#user-message').text('Error on sign out').css('color', 'red')
}

const onCreateGameSuccess = (responseData) => {
  $('#user-message').text('You have successfully created an example!!').css('color', 'green')
  console.log(responseData)
}

const onCreateGameFailure = () => {
  $('#user-message').text('Failure').css('color', 'red')
}

const onGetGamesSuccess = (responseData) => {
  $('#user-message').text('You have played some games').css('color', 'red')
}

const onGetGamesFailure = () => {
  $('#user-message').text('Error').css('color', 'red')
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
  onGetGamesFailure: onGetGamesFailure

}
