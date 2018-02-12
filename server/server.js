// A "closer to real-life" app example
// using 3rd party middleware modules
// P.S. MWs calls be refactored in many files

// long stack trace (+clarify from co) if needed
if (process.env.TRACE) {
  require('./libs/trace');
}

const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');

const config = require('config');
const mongoose = require('./libs/mongoose');

// keys for in-koa KeyGrip cookie signing (used in session, maybe other modules)
app.keys = [config.secret];

const path = require('path');
const fs = require('fs');

app.use(cors());

const middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function(middleware) {
  app.use(require('./middlewares/' + middleware));
});


// ---------------------------------------

// can be split into files too
const Router = require('koa-router');

const router = new Router();

router.get('/api/home', require('./routes/HomePage').get);

router.post('/sign_in', require('./routes/sign_in').post);
router.post('/sign_up', require('./routes/sign_up').post);
router.post('/logout', require('./routes/logout').post);
router.get('/private', require('./routes/private').get);

router.post('/forgot_recover', require('./routes/forgot_recover').post);
router.get('/forgot-recover/:passwordResetToken', require('./routes/forgot_recover').get);
router.post('/recover_password', require('./routes/recover_password').post);

router.get('/verify-email/:verifyEmailToken', require('./routes/verifyEmail').get);

app.use(router.routes());

module.exports = app;
