
exports.post = async function(ctx, next) {
  ctx.logout();

  ctx.session = null; // destroy session (!!!)

  ctx.redirect('http://localhost:8080/home');
};
