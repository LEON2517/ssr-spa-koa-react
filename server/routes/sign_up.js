const User = require('../models/user');
const passport = require('koa-passport');
const sendMail = require('../libs/sendMail');
const config = require('config');
const uuid4 = require('uuid4');

exports.post = async function(ctx) {

    const verifyEmailToken = uuid4();

/*    console.log(ctx.request.body);
    console.log(ctx.request.body.firstName);
    console.log(ctx.request.body.email);*/

    const user = new User({
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email.toLowerCase(),
        password: ctx.request.body.password,
        verifiedEmail: false,
        verifyEmailToken: verifyEmailToken,
        verifyEmailRedirect: ctx.request.body.successRedirect //не очень понятно как это работает? в verifyEmail есть условие   const redirect = user.verifyEmailRedirect || 'http://localhost:8080/sign_in';  и в sign_in successRedirect: 'http://localhost:8080/sign_in'

    });


    try {
        await user.save();
    } catch(e) {
            let errorMessages = "";
            for(let key in e.errors) {
                errorMessages += `${key}: ${e.errors[key].message}<br>`;
            }
            ctx.body = {error: errorMessages};
            return;
    }


    await sendMail({
        template: 'verify-registration-email',
        to: user.email,
        subject: "Подтверждение email",
        link: config.server.siteHost + '/verify-email/' + verifyEmailToken
    });

    ctx.body = {success: 'Вы зарегистрированы. Пожалуйста, загляните в почтовый ящик, там письмо с Email-подтверждением.'}

};