const passport = require('koa-passport');
const config = require('config');
const {Strategy, ExtractJwt} = require('passport-jwt');
const User = require('../../models/user');

passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'), //из пейлоада делает JWT?
  secretOrKey: config.get('jwtSecret'),
  session: false //это бязательный параметр или можно удалить если сессию держит локал сторедж?
}, function(jwtPayload, done) {
  console.log(jwtPayload) //откуда взялся jwtPayload?
  User.findById(jwtPayload.id, function(err, user) { //всетаки как он находит юзера? непонятно как работает jwtPayload.id, function(err, user)
    if (err) {
      return done(err, false);
    }

    if (!user) {
      return done(
          null,
          false
      )
    }

    return done(null, user);
  });
}));


/*{message: 'Нет такого пользователя или неверный пароль'});*/

