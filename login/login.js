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
