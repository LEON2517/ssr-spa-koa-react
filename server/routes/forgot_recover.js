const User = require('../models/user');
const sendMail = require('../libs/sendMail');
const config = require('config');

exports.get = async function(ctx) {

    console.log(ctx.params.passwordResetToken);

    const user = await User.findOne({
        passwordResetToken: ctx.params.passwordResetToken,
        passwordResetTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
        ctx.body = {error: 'Токен сбоса пароля не действителен или истек'};
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
        ctx.body = {error: 'Введите корректный Email'};
        return;
    }

    user.passwordResetToken = Math.random().toString(36).slice(2, 10);
    user.passwordResetTokenExpires = new Date(Date.now() + 86400*1e3);

    await user.save();

    await sendMail({
        template: 'forgot-email',
        to: user.email,
        subject: 'Востановление пароля',
        link: config.server.siteHost + '/forgot-recover/' + user.passwordResetToken,
    });

    ctx.status = 200;
    ctx.body = {success: 'Проверте Вашу почту, на нее отправленна ссылка для восстановления пароля'};
};