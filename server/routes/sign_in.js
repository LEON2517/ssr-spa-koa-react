const config = require('config');
const jwt = require('jwt-simple');
const passport = require('koa-passport');

exports.post = async function (ctx, next) {

  await passport.authenticate('local', async function (err, user, info ) {

      if (err) throw err;

      else {
        if (user) {

          const payload = {
            id: user._id,
            firstName: user.firstName
            };

          const token = jwt.encode(payload, config.jwtSecret);

          ctx.body = {token};

          } else {
              ctx.body = info;
          }
      }
  })(ctx, next); //почему здесь без (ctx, next) на конце не работает а у compose все ок?

};
    
    

