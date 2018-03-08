const config = require('config');
const jwt = require('jwt-simple');
const passport = require('koa-passport');
const compose = require('koa-compose');


//как реализовать код ниже внутри модуля компоус? не понятно как работать с (err, user, info ) в compose

/*exports.post = compose([
  passport.authenticate('local'),
  async (ctx, next) => {
    if (ctx.state.user) { //как работает поиск по ctx.state.user? не понятен приницп работы ctx.state
      const payload = {
        id: ctx.state.user._id,  //как ctx.state получает id юзера? для чего _?
        firstName: ctx.state.user.firstName
      };

      const token = jwt.encode(payload, config.jwtSecret);

      ctx.body = {token};
    } else {
        ctx.throw(401, info)
    }
  }
]);*/



exports.post = async function (ctx, next) {

  await passport.authenticate('local', async function (err, user, info ) {

    //ctx.body = info; //для чего сразу отдавать инфо? info - аналог флеша? не понял как его адаптировать под SPA (не работает)

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
              ctx.body = { message: 'Нет такого пользователя или пароль неверен.' };
          }
      }
  })(ctx, next); //почему здесь без (ctx, next) на конце не работает а у compose все ок?

};
    
    

