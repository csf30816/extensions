/* ===== ./login/login.js ===== */
$scope.login = function () {
  $scope.message = 'loading...';
   $scope.loading = true;
   auth.signin({
     connection: 'Username-Password-Authentication',
     username: $scope.user,
     password: $scope.pass,
     authParams: {
       scope: 'openid name email' //Details: https://auth0.com/docs/scopes
     }
   }, onLoginSuccess, onLoginFailed);
 };
/* ===== ./login/login.js ===== */
$scope.googleLogin = function () {
  $scope.message = 'loading...';
  $scope.loading = true;

  auth.signin({
    popup: true,
    connection: 'google-oauth2',
    scope: 'openid name email'
  }, onLoginSuccess, onLoginFailed);
};
/* ===== ./login/login.js ===== */
function onLoginSuccess(profile, token) {
  $scope.message.text = '';
  store.set('profile', profile);
  store.set('token', token);
  $location.path('/');
  $scope.loading = false;
}
function onLoginFailed() {
  $scope.message.text = 'invalid credentials';
  $scope.loading = false;
}
/* ===== ./login/login.js ===== */
$scope.signup = function () {
  $scope.message = 'loading...';
 $scope.loading = true;
 auth.signup({
   connection: 'Username-Password-Authentication',
   username: $scope.user,
   password: $scope.pass,
   authParams: {
     scope: 'openid name email'
   }
 }, onLoginSuccess, onLoginFailed);
}
