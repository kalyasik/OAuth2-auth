function onSuccess(googleUser) {
   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
   console.log(error);
}
function renderButton() {
   gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 380,
      'height': 40,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
   });
}