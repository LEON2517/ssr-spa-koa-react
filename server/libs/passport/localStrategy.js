let passport = require('koa-passport');
let LocalStrategy = require('passport-local');
const User = require('../../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  function(email, password, done) {
    User.findOne({ email }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user || !user.checkPassword(password)) {

        return done(
            null,
            false,
            { message: 'Нет такого пользователя или пароль неверен.' });
      }

        if (!user.verifiedEmail) {
            return done(
                null,
                false,
                { message: 'Email не подтверждён' });
        }

      return done(null, user);
    });
  }
));
