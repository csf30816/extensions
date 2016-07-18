var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'swiftnews.auth0.com',
    clientID:     'tMa3kXkEDhGZapWiiVMVLUKOvFjsTx9R',
    clientSecret: 'E88bztDtzMYbBh1XQpFwddW3w_xjpN6pgFgx7P5wc8jQU-Z8i-dYvGlezVCjT_t7',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;
