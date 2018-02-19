const User = require('../models/user');
const sendMail = require('../libs/sendMail');
const config = require('config');

exports.post = async function(ctx) {

    console.log(ctx.request.body);

    const user = await User.findOne({
        passwordResetToken: ctx.request.body.passwordResetToken,
        passwordResetTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
        ctx.status = 408;
        ctx.body = { message: 'Токен устарел или не действителен' };
        return;
    }

    user.password = ctx.request.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;

    await user.save();

    await sendMail({
        template: 'forgot-password',
        to: user.email,
        subject: 'Востановление пароля',
        text: 'Уведомляем вас, что пароль на аккаунте' + user.email + 'успешно изменен'
    });

    ctx.status = 200;
    ctx.body = { message: 'Пароль успешно изменен' };
};
