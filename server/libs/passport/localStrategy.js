let passport = require('koa-passport');
let LocalStrategy = require('passport-local');
const User = require('../../models/user');

// Стратегия берёт поля из req.body
// Вызывает для них функцию
passport.use(new LocalStrategy({
    //как значения из req.body попали в usernameField: 'email' и passwordField: 'password',?
    usernameField: 'email', // 'username' by default
    passwordField: 'password',
    session: false
  },
  function(email, password, done) {
    User.findOne({ email }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user || !user.checkPassword(password)) {
        // don't say whether the user exists
        return done(
            null, //нет ошибки
            false, //нет пользователя
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
