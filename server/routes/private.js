const passport = require('koa-passport');
const compose = require('koa-compose');

exports.get = compose([
  passport.authenticate('jwt'),
  async (ctx, next) => {
    if (!ctx.state.user) {
      ctx.status = 400;
      ctx.body = {message: 'invalid credentials'};
      return;
    }

    ctx.body = {
      balance: '0 RUR',
      private: 'top most secret info',
      email: ctx.state.user.email,
      firstName: ctx.state.user.firstName,
      lastName: ctx.state.user.lastName
    };
  }
]);
