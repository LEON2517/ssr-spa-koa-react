const User = require('../models/user');
const passport = require('koa-passport');
const sendMail = require('../libs/sendMail');
const config = require('config');
const uuid4 = require('uuid4');

exports.post = async function(ctx) {

    const user = await User.findOne({
        email: ctx.request.body.email
    });

    if(user) {
        ctx.body = { message: 'Электронный адресс ' + user.email + ' занят' };
        return;
    }

    const verifyEmailToken = uuid4();
    const newUser = new User({
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email.toLowerCase(),
        password: ctx.request.body.password,
        verifiedEmail: false,
        verifyEmailToken: verifyEmailToken,
        verifyEmailRedirect: ctx.request.body.successRedirect
    });

    try {
        await newUser.save();
    } catch(e) {
        ctx.body = { message: 'Что то пошло не так, попробуйте еще раз' };
        return;
    }

    await sendMail({
        template: 'verify-registration-email',
        to: newUser.email,
        subject: "Подтверждение email",
        link: config.server.siteHost + '/verify-email/' + verifyEmailToken
    });

    ctx.body = { message: 'Вы зарегистрированы. Пожалуйста, загляните в почтовый ящик, там письмо с Email-подтверждением.' }

};