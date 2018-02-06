const User = require('../models/user');
const passport = require('koa-passport');
const sendMail = require('../libs/sendMail');
const config = require('config');
const uuid4 = require('uuid4');

exports.post = async function(ctx) {

    const verifyEmailToken = uuid4();

    console.log(ctx.request.body);
    console.log(ctx.request.body.firstName);
    console.log(ctx.request.body.email);

    const user = new User({
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email.toLowerCase(),
        password: ctx.request.body.password,
        verifiedEmail: false,
        verifyEmailToken: verifyEmailToken,
        verifyEmailRedirect: ctx.request.body.successRedirect
    });


    try {
        await user.save();
    } catch(e) {
        if (e.name == 'ValidationError') {
            let errorMessages = "";
            for(let key in e.errors) {
                errorMessages += `${key}: ${e.errors[key].message}<br>`;
            }
            ctx.redirect('/sign_up');
            return;
        } else {
            ctx.throw(e);
        }
    }

    // We're here if no errors happened

    await sendMail({
        template: 'verify-registration-email',
        to: user.email,
        subject: "Подтверждение email",
        link: config.server.siteHost + '/verify-email/' + verifyEmailToken
    });

    ctx.body = 'Вы зарегистрированы. Пожалуйста, загляните в почтовый ящик, там письмо с Email-подтверждением.'

};