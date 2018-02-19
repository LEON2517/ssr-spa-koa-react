const User = require('../models/user');
const sendMail = require('../libs/sendMail');
const config = require('config');
const uuid4 = require('uuid4');

exports.get = async function(ctx) {

    console.log(ctx.params.passwordResetToken);

    const user = await User.findOne({
        passwordResetToken: ctx.params.passwordResetToken,
        passwordResetTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
        ctx.status = 408;
        ctx.body = {message: 'Токен сбоса пароля не действителен или истек'};
        return;
    }

    const redirect = 'http://localhost:8080/forgot-recover/recover-password/' + user.passwordResetToken;
    ctx.redirect(redirect)
};

exports.post = async function(ctx) {

    console.log(ctx.request.body);

    const user = await User.findOne({
        email: ctx.request.body.email.toLowerCase()
    });

    if (!user) {
        ctx.status = 400;
        ctx.body = { message: 'Введите корректный Email' };
        return;
    }

    user.passwordResetToken = uuid4();
    user.passwordResetTokenExpires = new Date(Date.now() + 86400*1e3);

    await user.save();

    await sendMail({
        template: 'forgot-password',
        to: user.email,
        subject: 'Востановление пароля',
        link: config.server.siteHost + '/forgot-recover/' + user.passwordResetToken,
    });

    ctx.status = 200;
    ctx.body = { message: 'Проверте Вашу почту, на нее отправленна ссылка для восстановления пароля' };
};